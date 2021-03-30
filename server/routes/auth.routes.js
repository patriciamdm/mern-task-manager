const express = require('express')
const router = express.Router()


const { check } = require('express-validator')
const {userIsLogged} = require('../middlewares/middlewares')
const authController = require('../controllers/authController')


router.post('/',
    authController.authenticateUser
)


router.get('/',
    userIsLogged,
    authController.getLoggedUser
)


module.exports = router