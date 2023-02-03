const path = require('path')
const express = require('express')
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const rateLimiter = require('express-rate-limit')
const port = process.env.PORT || 5000

// Rate limiter config
const config = {
  windowMs: 15 * 60 * 1000,
  max: 10000,
  standardHeaders: true,
  legacyHeaders: false,
}

const limiter = rateLimiter(config)

// Connect the DB to the server
const connectDB = require('./config/db')
connectDB()

const app = express()
const expressWs = require('express-ws')(app)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(limiter)


// Define the routers used
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api', require('./routes/crudRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production!'))
}

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
