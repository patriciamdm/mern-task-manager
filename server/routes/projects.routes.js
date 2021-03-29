const express = require('express')
const router = express.Router()

const {check} = require('express-validator')
const {userIsAuthenticated} = require('../middlewares/middlewares')
const projectController = require('../controllers/projectController')


router.post('/',
    userIsAuthenticated,
    [
        check('name', 'Name is required').not().isEmpty()
    ],
    projectController.createProject
)


router.get('/',
    userIsAuthenticated,
    projectController.getProjects
)


router.put('/:id',
    userIsAuthenticated,
    [
        check('name', 'Name is required').not().isEmpty()
    ],
    projectController.updateProject
)


router.delete('/:id',
    userIsAuthenticated,
    projectController.deleteProject
)


module.exports = router