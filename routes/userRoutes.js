const express = require('express')
const multer = require('multer')
const path = require('path')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

// Set up multer storage
const storage = multer.diskStorage({
    destination: 'uploads/',  // directory to store uploaded images
    filename: function (req, file, cb) {
        console.log('File received:', file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const router = express.Router()
const upload = multer({ storage: storage })

// Get user by ID
router.get('/:userId', authMiddleware.authenticateToken, userController.getUserById)

// Update user details
router.put('/update', authMiddleware.authenticateToken, userController.updateUser)

// Delete user account
router.delete('/delete', authMiddleware.authenticateToken, userController.deleteUser)

// Upload user profile image
router.post('/upload-image', authMiddleware.authenticateToken, upload.single('image'), userController.uploadImage)

// Get user image
router.get('/get-image/:userId', authMiddleware.authenticateToken, userController.getImage)

module.exports = router
