const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const User = require('../models/user.model')


exports.createUser = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ msgs: errors.array() })
    }

    const {username, email, password, registered} = req.body

    try {

        const prevUser = await User.findOne({ email })

        if (prevUser) {
            return res.status(400).json({ msg: 'User already exists' })
        }

        
        const salt = await bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(password, salt)

        const user = await User.create({ username, email, password: hashPass, registered })


        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.TOKEN, {
            expiresIn: 3600 // 1 hour
        }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
        
    } catch (err) {
        console.error('Error creating user:', err)
        res.status(500).json({ msg: 'Error saving user to database' })
    }
}