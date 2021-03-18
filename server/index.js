require('dotenv').config()

// Database
const connectDB = require('./configs/mongoose.config')
connectDB()

// App
const express = require('express')
const app = express()


const PORT = process.env.PORT || 4000


app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`)
})