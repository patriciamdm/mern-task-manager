const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController.js')

// const {checkIdFormat} = require('../middlewares/middleware')

// const User = require('../models/user.model')

// router.get('/getAllUsers', (req, res) => {

//     User
//         .find()
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })


router.post('/', userController.createUser)

module.exports = router