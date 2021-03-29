const { validationResult } = require('express-validator')

const Task = require('../models/taks.model')
const Project = require('../models/project.model')


exports.createTask = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ msgs: errors.array() })
    }

    try {
        const project = await Project.findById(req.body.project)
        if (!project) {
            return res.status(404).jason({msg: 'Project not found'})
        }
        if (project.creator.toString() !== req.user.id) {
            return res.status(401).jason({msg: 'Not authorized'})
        }

        const task = await Task.create(req.body)
        res.json({task})

    } catch (err) {
        console.error('Error creating task:', err)
        res.status(500).json({ msg: 'Error saving task to database' })
    }
}