const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: Boolean,
        default: false
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        rel: 'Project'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Task", taskSchema)