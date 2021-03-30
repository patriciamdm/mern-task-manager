const express = require('express')
const router = express.Router()

const {check} = require('express-validator')
const {userIsLogged} = require('../middlewares/middlewares')
const projectController = require('../controllers/projectController')


router.post('/',
    userIsLogged,
    [
        check('name', 'Name is required').not().isEmpty()
    ],
    projectController.createProject
)


router.get('/',
    userIsLogged,
    projectController.getProjects
)


router.put('/:id',
    userIsLogged,
    [
        check('name', 'Name is required').not().isEmpty()
    ],
    projectController.updateProject
)


router.delete('/:id',
    userIsLogged,
    projectController.deleteProject
)


module.exports = router