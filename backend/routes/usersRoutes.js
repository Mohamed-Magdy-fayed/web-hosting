const express = require('express')

const router = express.Router()
// Get all the actions (testAPI) from the controller
const {
  resetPasswordLink,
  resetPassword,
  registerUser,
  adminAddUser,
  loginUser,
  logoutUser,
  checkAuth,
  editUser,
  deleteUser,
} = require('../controllers/usersController')

// Protect the needed routes
const { protect } = require('../middleware/authMiddleware')

// Define all the routes for /api/users
router.get('/checkauth', checkAuth)
router.post('/login', loginUser)
router.post('/logout', protect, logoutUser)
router.post('/reset-password/request', resetPassword)
router.post('/reset-password/response', resetPasswordLink)
router.post('/register', registerUser)
router.post('/adduser', protect, adminAddUser)
router.put('/:id', protect, editUser)
router.delete('/:id', protect, deleteUser)

module.exports = router
