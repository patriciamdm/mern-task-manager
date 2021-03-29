const express = require('express')
const router = express.Router()

const {userIsAuthenticated} = require('../middlewares/middlewares')
const projectController = require('../controllers/projectController')


router.post('/',
    userIsAuthenticated,
    projectController.createProject
)

// router.get('/',
//     userIsAuthenticated,
//     projectController.createProject
// )


module.exports = router