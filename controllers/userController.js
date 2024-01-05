const { validatorResult } = require('express-validator')
const User = require('../models/User')

const multer = require('multer')
const path = require('path')
const fs = require('fs').promises

async function uploadImage(req, res) {
    try {
        const userId = req.user.userId

        // check if user already uploaded an image
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        if (user.profileImage) {
            // Delete the previous image if exists
            await fs.unlink(path.join('uploads', user.profileImage))
        }

        // Save the new image path to the user's profileImage field
        user.profileImage = req.file.filename
        await user.save()
        console.log('New filename:', req.file.filename)
        res.json({ message: "Image uploaded successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

async function getImage(req, res) {
    try {
        const userId = req.params.userId

        // Retrieve user information including the profile image
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        // Return the image file path
        if (user.profileImage) {
            res.sendFile(path.join(__dirname, '..', 'uploads', user.profileImage))
        } else {
            return res.status(404).json({ message: "Image not found" })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

async function getUserById(req, res) {
    try {
        const userId = req.params.userId

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.json(user)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

async function updateUser(req, res) {
    try {
        const userId = req.user.userId // extract user Id from jwt
        const { name, profileImage } = req.body

        // Users can only modify their own name and profile image
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        user.name = name
        user.profileImage = profileImage

        // save the user
        await user.save()

        res.status(201).json({ message: "User updated successfully" })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

async function deleteUser(req, res) {
    try {
        const userId = req.user.userId // extract user id from jwt

        await User.findByIdAndDelete(userId)

        res.status(201).json({ message: "User deleted successfully" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

module.exports = {
    getUserById,
    updateUser,
    deleteUser,
    uploadImage,
    getImage
}