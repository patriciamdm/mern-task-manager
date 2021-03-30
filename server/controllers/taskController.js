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
            return res.status(404).json({msg: 'Project not found'})
        }
        if (project.creator.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'})
        }

        const task = await Task.create(req.body)
        res.json(task)

    } catch (err) {
        console.error('Error creating task:', err)
        res.status(500).json({ msg: 'Error saving task to database' })
    }
}


exports.getTasks = async (req, res) => {
    const { project } = req.query
    try {
        const projectExists = await Project.findById(project)
        if (!projectExists) {
            return res.status(404).json({msg: 'Project not found'})
        }
        if (projectExists.creator.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'})
        }
        const tasks = await Task.find({ project }).sort({createdAt: -1})
        res.json({tasks})

    } catch (err) {
        console.error('Error getting tasks:', err)
        res.status(500).json({ msg: 'Error getting tasks from database' })
    }
}


exports.updateTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).json({msg: 'Task not found'})
        }

        const project = await Project.findById(req.body.project)
        if (project.creator.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'})
        }

        task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({task})

    } catch (err) {
        console.error('Error updating task:', err)
        res.status(500).json({ msg: 'Error updating task in database' })
    }
}


exports.deleteTask = async (req, res) => {
    const { project } = req.query
    try {
        let task = await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).json({msg: 'Task not found'})
        }

        const projectExists = await Project.findById(project)
        if (projectExists.creator.toString() !== req.user.id) {
            return res.status(401).json({msg: 'Not authorized'})
        }

        await Task.findByIdAndDelete(req.params.id)
        res.json({msg: 'Task deleted successfully'})

    } catch (err) {
        console.error('Error deleting task:', err)
        res.status(500).json({ msg: 'Error deleting task from database' })
    }
}