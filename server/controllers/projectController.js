const Project = require('../models/project.model')


exports.createProject = async (req, res) => {

    const {name} = req.body
    const creator = req.user.id

    try {
        const project = await Project.create({name, creator})

    } catch (err) {
        console.error('Error creating project:', err)
        res.status(500).json({ msg: 'Error saving project to database' })
    }
}