const express = require('express')
const router = express.Router()

const {check} = require('express-validator')
const {userIsLogged} = require('../middlewares/middlewares')
const taskController = require('../controllers/taskController')


router.post('/',
    userIsLogged,
    [
        check('name', 'Name is required').not().isEmpty()
    ],
    taskController.createTask
)


router.get('/',
    userIsLogged,
    taskController.getTasks
)


router.put('/:id',
    userIsLogged,
    taskController.updateTask
)


router.delete('/:id',
    userIsLogged,
    taskController.deleteTask
)


module.exports = router