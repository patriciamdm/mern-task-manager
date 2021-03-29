const express = require('express')
const router = express.Router()

const {check} = require('express-validator')
const {userIsAuthenticated} = require('../middlewares/middlewares')
const taskController = require('../controllers/taskController')


router.post('/',
    userIsAuthenticated,
    [
        check('name', 'Name is required').not().isEmpty()
    ],
    taskController.createTask
)


// router.get('/',
//     userIsAuthenticated,
//     taskController.getProjects
// )


// router.put('/:id',
//     userIsAuthenticated,
//     [
//         check('name', 'Name is required').not().isEmpty()
//     ],
//     taskController.updateProject
// )


// router.delete('/:id',
//     userIsAuthenticated,
//     taskController.deleteProject
// )


module.exports = router