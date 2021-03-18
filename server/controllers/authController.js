const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const User = require('../models/user.model')


exports.authenticateUser = async (req, res) => {
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ msgs: errors.array() })
    }

    const { email, password } = req.body
    
    try {

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist'})
        }

        const correctPswd = await bcrypt.compareSync(password, user.password)
        if (!correctPswd) {
            return res.status(400).json({ msg: 'Wrong password'})
        }

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

        console.error('Error authenticating user:', err)
        res.status(500).json({ msg: 'Error authenticating user' })
    }

}