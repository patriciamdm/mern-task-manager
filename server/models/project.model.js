const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        rel: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Project", projectSchema)