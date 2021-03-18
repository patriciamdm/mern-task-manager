const express = require('express')
const router = express.Router()


const { check } = require('express-validator')
const authController = require('../controllers/authController')


router.post('/',
    [
        check('email', 'Please, include a valid email').isEmail(),
        check('password', 'Password length must be at least 6 characters').isLength({ min: 6 })
    ],
    authController.authenticateUser
)


module.exports = router