const mongoose = require('mongoose')

// mongoose
//     .connect(process.env.DB_REMOTE, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
//     .catch(err => console.error('Error connecting to mongo', err))

// module.exports = mongoose

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.DB_REMOTE, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Connected to Mongo! Database name: "${db.connections[0].name}"`)
    } catch (err) {
        console.error('Error connecting to mongo', err)
        process.exit(1)
    }
}

module.exports = connectDB