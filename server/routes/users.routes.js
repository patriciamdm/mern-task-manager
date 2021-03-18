const express = require('express')
const router = express.Router()
const {check} = require('express-validator')

const userController = require('../controllers/userController.js')

// const {checkIdFormat} = require('../middlewares/middleware')

// const User = require('../models/user.model')

// router.get('/getAllUsers', (req, res) => {

//     User
//         .find()
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })


router.post('/',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('email', 'Please, include a valid email').isEmail(),
        check('password', 'Password length must be at least 6 characters').isLength({ min: 6 })
    ],
    userController.createUser
)

module.exports = router