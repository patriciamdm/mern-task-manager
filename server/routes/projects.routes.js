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


module.exports = router