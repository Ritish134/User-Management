const User = require('../models/User')
const bcrypt = require('bcrypt')

async function createAdmin(req, res) {
    try {
        const { email, phone, name, profileImage, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const admin = new User({
            email,
            phone,
            name,
            profileImage,
            password: hashedPassword,
            role: 'Admin'
        })

        // save admin user
        await admin.save()

        res.status(200).json({ message: "Admin created successfully" })
    } catch (error) {
        console.error(error);
        res.status(501).json({ message: 'Internal Server Error' })
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

async function updateUserByAdmin(req, res) {
    try {
        const { userId } = req.params
        const { name, role } = req.body
        const user = await User.findById(userId)
        // Update user properties
        user.name = name;
        user.role = role;

        // Save user
        await user.save();
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json({ user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function deleteUserByAdmin(req, res) {
    try {
        const { userId } = req.params

        await User.findByIdAndDelete(userId)

        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}


module.exports = {
    createAdmin,
    getAllUsers,
    updateUserByAdmin,
    deleteUserByAdmin
}