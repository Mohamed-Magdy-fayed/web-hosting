const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.cookies.token
  ) {
    try {
      // Get token from cookies
      token = req.cookies.token

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id)

      next()
    } catch (error) {
      res.status(401)
      throw new Error(`Not authorized ${error.message}`)
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { protect }
