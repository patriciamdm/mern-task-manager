const bcrypt = require("bcrypt")

const User = require('../models/user.model')


exports.createUser = async (req, res) => {

    const {username, email, password, registered} = req.body

    try {
        const prevUser = await User.findOne({ email })

        if (prevUser) {
            return res.status(400).json({ msg: 'User already exists' })
        }

        const salt = await bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(password, salt)

        await User.create({ username, email, password: hashPass, registered })
        res.json({ msg: 'User created successfully' })
        
    } catch (err) {
        
        console.error('Error creating user:', err)
        res.status(500).json({ msg: 'Error saving user to database' })
    }
}