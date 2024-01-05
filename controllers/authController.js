const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const User = require('../models/User')
const config = require('../config/config')


async function signup(req, res) {
    try {
        const { email, phone, name, profileImage, password, role } = req.body

        // Validate input
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create User
        const user = new User({
            email,
            phone,
            name,
            profileImage,
            password: hashedPassword,
            role
        })

        // Save user to database
        await user.save()

        res.status(201).json({ message: "User created successfully" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function login(req, res) {
    try {
        const { email, phone, password } = req.body

        // Find user by email or phone
        const user = await User.findOne({ $or: [{ email }, { phone }] })

        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" })
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Credentials" })
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, config.jwtSecret, { expiresIn: '1h' })
        res.json({ token })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {
    signup,
    login
}