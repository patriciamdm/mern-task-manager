const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    registered: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)