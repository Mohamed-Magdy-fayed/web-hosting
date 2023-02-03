const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const wsProtect = asyncHandler(async (ws, req, next) => {
  let token

  if (
    req.cookies.token
  ) {
    try {
      // Get token from header
      token = req.cookies.token

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id)

      next()
    } catch (error) {
      ws.send(`Not authorized ${error.message}`)
    }
  }

  if (!token) {
    res.send('Not authorized, no token')
  }
})

module.exports = { wsProtect }
