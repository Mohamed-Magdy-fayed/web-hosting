// Generate a token to auth users
const jwt = require('jsonwebtoken')
// Create hashed password to be saved in DB
const bcrypt = require('bcryptjs')
// Handle the async requests to the API
const asyncHandler = require('express-async-handler')
// mongoDB models
const User = require('../models/usersModel')
const Auth = require('../models/authModel')
// Node Mailer
const nodemailer = require('nodemailer')

// @desc    Register new user
// @route   POST /api/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body

  try {
    // Check if user exists
    const userExists = await User.findOne({ email })
    if (userExists) throw new Error(`user already exists`)

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    res.status(201).json({
      user,
      token: generateToken(user._id),
    })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
})

// @desc    Admin add new user
// @route   POST /api/adduser
// @access  Public
const adminAddUser = asyncHandler(async (req, res) => {

  const {
    name,
    email,
    password,
    userType,
    status,
  } = req.body

  try {
    // Check if user exists
    const userExists = await User.findOne({ email })
    if (userExists) throw new Error(`user already exists`)

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      userType,
      status,
      accessList: []
    })

    res.status(201).json({
      user,
    })
  } catch (error) {
    throw new Error(`unknowen server or DB error`)
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  try {
    // Check for user email
    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ message: 'Invalid email' })

    if (!await bcrypt.compare(password, user.password)) throw new Error('Incorrect Password!')

    const token = generateToken(user._id)
    await Auth.create({ token, userID: user._id })

    res
      .status(200)
      .cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true })
      .json({
        user,
      })
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message)
  }
})

// @desc    check if a user is logged in
// @route   GET /api/users/checkauth
// @access  Private
const checkAuth = asyncHandler(async (req, res) => {
  const token = req.cookies.token

  if (!token) return res.status(200).json({ message: 'please login to continue' })

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Get user from the token
    const user = await User.findById(decoded.id)

    const isAuthed = await Auth.findOne({ token })
    if (!isAuthed) {
      res.status(401)
      throw new Error('Your session has expired, please login to continue')
    }

    res
      .status(200)
      .json({
        user,
      })
  } catch (error) {
    res.status(400).json(error.message)
  }
})

// @desc    logout a user
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  const token = req.cookies.token

  try {
    const deleted = await Auth.findOneAndDelete({ token })
    if (!deleted) {
      res.status(400)
      throw new Error('login session already revoked!')
    }

    res
      .status(200)
      .clearCookie('token')
      .json({
        loggedOutUser: req.user._id,
      })
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})

// @desc    Edit a user
// @route   PUT /api/users/:id
// @access  private
const editUser = asyncHandler(async (req, res) => {
  // check user privilege
  if (req.user.status === 3) throw new Error(`access denied, demo admin account`)
  if (req.user.status < 2) throw new Error(`access denied, inacitve account`)

  const {
    name,
    email,
    password,
    userType,
    status,
    accessList,
  } = req.body
  const id = req.params.id

  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = password ? await bcrypt.hash(password, salt) : null

    // Check for user
    const user = await User.findById(id)
    if (!user) throw new Error('invalid user ID')

    const edits = req.user.userType < 2 ? {
      name,
      email,
      password: password ? hashedPassword : user.password,
      userType,
      status,
      accessList,
    } : {
      name,
      email,
    }

    if (edits.email !== user.email) {
      // check email
      const isDublicate = await User.find({ email: edits.email })
      if (isDublicate.length > 0) throw new Error(`user email already exists`)
    }

    // update the user
    const data = await User.findOneAndUpdate({ _id: id }, edits, {
      new: true
    })

    res.status(200).json({ updated: data })
  } catch (error) {
    throw new Error(error.message)
  }
})

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  private
const deleteUser = asyncHandler(async (req, res) => {

  const id = req.params.id

  try {
    // Check for user
    const doc = await User.findById(id)
    if (!doc) throw new Error(`invalid user id`)

    await User.deleteOne({ _id: id })

    res.status(200).json({ deletedID: doc.id })
  } catch (error) {
    throw new Error(error.message)
  }
})

// @desc    Resets user password
// @route   POST /api/users/reset-password/response
// @access  Private
const resetPasswordLink = asyncHandler(async (req, res) => {

  const newPassword = req.body.password
  const token = req.body.token

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userID = decoded.id

    // check if link expiered
    const sessionID = await Auth.find({ token })
    if (!sessionID[0]) {
      res.status(400)
      throw new Error('This Link Is Expired.')
    }

    // Get user from the token
    const user = await User.findById(userID)
    if (await bcrypt.compare(newPassword, user.password)) {
      res.status(400)
      throw new Error('you can\'t use the old password')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    const data = await User.findOneAndUpdate({ _id: userID }, {
      password: hashedPassword,
    }, {
      new: true
    })

    await Auth.deleteOne({ token })
    res.redirect('/')
  } catch (error) {
    res.status(401)
    throw new Error(error.message)
  }
})

// @desc    Resets user password
// @route   POST /api/users/reset-password
// @access  public
const resetPassword = asyncHandler(async (req, res) => {

  const { email } = req.body

  try {
    // Check for user
    const user = await User.find({ email: email })
    if (user.length === 0) throw new Error('incorrect email')

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS
      }
    });

    const token = generateToken(user[0]._id)

    // check if user already have a token
    const userToken = await Auth.find({ userID: user[0]._id })
    if (userToken[0]) {
      await Auth.findOneAndUpdate(
        { userID: user[0]._id },
        { token: token },
        { new: true })
    } else {
      await Auth.create({ token: token, userID: user[0]._id })
    }

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "Reset Your Password!",
      html: `<p>Hi ${user[0].name},</p>
    <p>Please click this <a href="${process.env.HOST_URL}/resetpasswordlink/${token}">link</a> to reset your password</p>
    <p>If this wasn't you just ignore this mail and don't worry, Your data is safe ^_^</p>
    <p>Thank you</p>`
    }

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        res.status(500).json({ error: error.message })
      } else {
        res.status(200).json({ Recipients: info.accepted })
      }
    });
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })
}

module.exports = {
  resetPasswordLink,
  resetPassword,
  registerUser,
  adminAddUser,
  loginUser,
  logoutUser,
  checkAuth,
  deleteUser,
  editUser,
}
