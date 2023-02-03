// Handle the async requests to the API
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const Auth = require('../models/authModel')
// mongoDB models
const DB = require('mongoose')

// @desc    Connects to WS
// @route   WS /api/:collectionName
// @access  Private
const ws = asyncHandler(async (ws, req) => {
  // check user privilege
  if (req.user.userType > 2) throw new Error(`access denied, not an admin`)
  if (req.user.status < 2) throw new Error(`access denied, inactive account`)

  try {
    const collectionName = DB.modelNames().filter(collection => collection.toLowerCase() === req.params.collectionName)[0]
    const stream = DB.models[collectionName].watch()
    const stream2 = Auth.watch()
    const activeUsers = await Auth.find().count()

    stream.on('change', async (next) => {
      ws.send(JSON.stringify({ next }))
    })

    stream2.on('change', async (next) => {
      ws.send(JSON.stringify({ activeUsers: await Auth.find().count() }))
    })

    ws.send(JSON.stringify({ activeUsers }))
  } catch (error) {
    throw new Error(`server or DB error!`)
  }
})

// limit each data we have to a user type
const userHasAccess = (userType, collectionName) => {
  const access = {
    User: [0, 1, 2],
    AccessList: [0, 1, 2, 3, 4],
    Courses: [0, 1, 2, 3, 4],
    Auth: [0, 1, 2, 3, 4]
  }

  return access[collectionName].includes(userType)
}

console.log(DB.modelNames());

// @desc    Get All docs
// @route   POST /api/:collectionName/getall
// @access  Private
const getAll = asyncHandler(async (req, res) => {
  // check user privilege
  const collectionName = DB.modelNames().filter(collection => collection.toLowerCase() === req.params.collectionName)[0]
  if (!collectionName) throw new Error(`not found`)
  if (req.user.status < 2) throw new Error(`access denied, inactive account`)
  if (!userHasAccess(req.user.userType, collectionName)) throw new Error(`access denied, please contact your administrator`)

  try {
    const pageSize = req.body.pageSize
    const filters = req.body.filters
    const isSearch = req.body.isSearch
    const isPageChange = req.body.isPageChange
    const currentData = req.body.currentData

    let filtersObj = {}

    Object.keys(filters).map(key => {
      typeof filters[key] === 'string'
        ? filtersObj[key] = { '$regex': filters[key].toLowerCase(), "$options": "i" }
        : filtersObj[key] = { '$in': typeof filters[key] === 'object' ? [...filters[key]] : [filters[key]] }
    })

    const total = await DB.models[collectionName].find(filtersObj).count()
    const data = await DB.models[collectionName]
      .find(filtersObj)
      .sort({ _id: 1 })
      .skip(isSearch ? 0 : currentData)
      .limit(pageSize)

    const populateIDs = (dataX) => {
      const data = [...dataX]
      try {
        const populatedData = data.map(doc => {
          Object.keys(doc).filter(key => key.startsWith('ref')).map(async (ref) => {
            doc[ref] = typeof (ref._id) === String
              ? await DB.models[ref.collectionName].findById(ref._id)
              : await DB.models[ref.collectionName].find({
                '_id': {
                  $in: ref._id.map(id => mongoose.Types.ObjectId(id))
                }
              })

          })
        })

        return populatedData
      } catch (error) {
        console.log(error);
      }
    }

    populateIDs(data)

    res.status(200).json({ data, dataCount: data.length, total, isSearch, isPageChange })
  } catch (error) {
    throw new Error(error.message)
  }
})

// @desc    Get One doc
// @route   GET /api/:collectionName/:id
// @access  Private
const getDoc = asyncHandler(async (req, res) => {
  // check user privilege
  const collectionName = DB.modelNames().filter(collection => collection.toLowerCase() === req.params.collectionName)[0]
  if (!collectionName) throw new Error(`not found`)
  if (req.user.status < 2) throw new Error(`access denied, inactive account`)
  if (!userHasAccess(req.user.userType, collectionName)) throw new Error(`access denied, please contact your administrator`)

  try {
    const id = req.params.id
    // get the data
    const doc = await DB.models[collectionName].findById(id)

    return res.status(200).json({ doc })
  } catch (error) {
    throw new Error(error.message)
  }
})

// @desc    add a doc
// @route   POST /api/:collectionName/add
// @access  private
const addDoc = asyncHandler(async (req, res) => {
  // check user privilege
  const collectionName = DB.modelNames().filter(collection => collection.toLowerCase() === req.params.collectionName)[0]
  if (!collectionName) throw new Error(`not found`)
  if (req.user.status < 2) throw new Error(`access denied, inactive account`)
  if (!userHasAccess(req.user.userType, collectionName)) throw new Error(`access denied, please contact your administrator`)

  let document = {}

  try {
    Object.keys(req.body).map(key => {
      document[key] = req.body[key]
    })

    // Check if doc exists
    const uniqueField = Object.keys(DB.models[collectionName].schema.obj).filter(key => {
      return DB.models[collectionName].schema.obj[key].unique
    })[0]
    if (document[uniqueField]) {
      const exists = await DB.models[collectionName].findOne({ [uniqueField]: document[uniqueField] })
      if (exists) throw new Error(`dublicate unique key!`)
    }

    // Create doc
    const data = await DB.models[collectionName].create(document)

    res.status(201).json({
      data,
    })
  } catch (error) {
    throw new Error(error.message)
  }
})

const checkNoEdit = (oldData, newData) => {
  return Object.keys(newData).filter(key => {
    console.log(newData[key].toString() !== oldData[key].toString(), newData[key].toString(), oldData[key].toString())
    return newData[key].toString() !== oldData[key].toString()
  }).length === 0
}

// @desc    Edit a doc
// @route   PUT /api/:collectionName/:id
// @access  private
const editDoc = asyncHandler(async (req, res) => {
  // check user privilege
  const collectionName = DB.modelNames().filter(collection => collection.toLowerCase() === req.params.collectionName)[0]
  if (!collectionName) return res.status(404).json({ error: `not found` })
  if (req.user.status < 2) return res.status(401).json({ error: `access denied, inactive account` })
  if (!userHasAccess(req.user.userType, collectionName)) return res.status(401).json({ error: `access denied, please contact your administrator` })

  const id = req.params.id
  let document = {}

  try {
    Object.keys(req.body).map(key => {
      document[key] = req.body[key]
    })

    // Check if doc exists
    const exists = await DB.models[collectionName].findById(id)
    if (!exists) throw new Error(`invalid doc id!`)
    if (checkNoEdit(exists, document)) throw new Error('nothing changed')

    const uniqueField = Object.keys(DB.models[collectionName].schema.obj).filter(key => {
      return DB.models[collectionName].schema.obj[key].unique
    })[0]

    if (document[uniqueField] !== exists[uniqueField]) {
      const isNotUnique = await DB.models[collectionName].findOne({ [uniqueField]: document[uniqueField] })
      if (isNotUnique) throw new Error(`dublicate unique key!`)
    }

    // update the doc
    const data = await DB.models[collectionName].findOneAndUpdate({ _id: id }, document, {
      new: true
    })

    res.status(200).json({ updated: data })
  } catch (error) {
    throw new Error(error.message)
  }
})

// @desc    Delete a doc
// @route   DELETE /api/:collectionName/:id
// @access  private
const deleteDoc = asyncHandler(async (req, res) => {
  // check user privilege
  const collectionName = DB.modelNames().filter(collection => collection.toLowerCase() === req.params.collectionName)[0]
  if (!collectionName) throw new Error(`not found`)
  if (req.user.status < 2) throw new Error(`access denied, inactive account`)
  if (!userHasAccess(req.user.userType, collectionName)) throw new Error(`access denied, please contact your administrator`)

  try {
    const id = req.params.id

    // Check for course
    const doc = await DB.models[collectionName].findById(id)
    if (!doc) throw new Error(`invalid doc id`)

    const deleted = await DB.models[collectionName].deleteOne({ _id: id })

    res.status(200).json({ deletedID: doc.id })
  } catch (error) {
    throw new Error(error.message)
  }
})

module.exports = {
  ws,
  getAll,
  getDoc,
  addDoc,
  editDoc,
  deleteDoc,
}
