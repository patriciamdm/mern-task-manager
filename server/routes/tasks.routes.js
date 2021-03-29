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


router.get('/',
    userIsAuthenticated,
    taskController.getTasks
)


router.put('/:id',
    userIsAuthenticated,
    taskController.updateTask
)


router.delete('/:id',
    userIsAuthenticated,
    taskController.deleteTask
)


module.exports = router