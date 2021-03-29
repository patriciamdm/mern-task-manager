const { validationResult } = require('express-validator')

const Project = require('../models/project.model')


exports.createProject = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ msgs: errors.array() })
    }

    const { name } = req.body
    const creator = req.user.id

    try {
        const project = await Project.create({name, creator})

    } catch (err) {
        console.error('Error creating project:', err)
        res.status(500).json({ msg: 'Error saving project to database' })
    }
}


exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ creator: req.user.id })
        res.json({ projects })

    } catch (err) {
        console.error('Error getting projects:', err)
        res.status(500).json({ msg: 'Error getting projects from database' })
    }
}


exports.updateProject = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ msgs: errors.array() })
    }

    const { name } = req.body
    const editedProject = {}

    name ? editedProject.name = name : null

    try {
        let project = await Project.findById(req.params.id)
        if (!project) {
            return res.status(404).jason({msg: 'Project not found'})
        }
        if (project.creator.toString() !== req.user.id) {
            return res.status(401).jason({msg: 'Not authorized'})
        }

        project = await Project.findOneAndUpdate(req.params.id, editedProject, {new: true})
        res.json({ project })

    } catch (err) {
        console.error('Error updating project:', err)
        res.status(500).json({ msg: 'Error updating project in database' })
    }
}