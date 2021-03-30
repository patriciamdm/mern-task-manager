require('dotenv').config()

// Database
const connectDB = require('./configs/mongoose.config')
connectDB()

// // Debugger
// require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

//Configs
require('./configs/middleware.config')(app)
require('./configs/cors.config')(app)

// Routes index
require('./routes')(app)


const PORT = process.env.PORT || 5000

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`)
})