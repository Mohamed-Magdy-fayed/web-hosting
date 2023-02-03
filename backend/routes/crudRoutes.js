const express = require('express')

const router = express.Router()
// Get all the actions from the controller
const {
  ws,
  getAll,
  getDoc,
  addDoc,
  editDoc,
  deleteDoc,
} = require('../controllers/crudController')

// Protect the needed routes
const { protect } = require('../middleware/authMiddleware')
const { wsProtect } = require('../middleware/wsMiddleware')

// Define all the routes for /api/courses
router.ws('/:collectionName', wsProtect, ws)
router.get('/:collectionName/:id', protect, getDoc)
router.post('/:collectionName/getall', protect, getAll)
router.post('/:collectionName/add', protect, addDoc)
router.put('/:collectionName/:id', protect, editDoc)
router.delete('/:collectionName/:id', protect, deleteDoc)

module.exports = router
