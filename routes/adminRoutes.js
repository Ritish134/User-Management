const express = require('express')
const adminController = require('../controllers/adminController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

// Create Admin user
router.post('/create', authMiddleware.authenticateToken, authMiddleware.authorizeAdmin, adminController.createAdmin)

// Get all user details
router.get('/all', authMiddleware.authenticateToken, authMiddleware.authorizeAdmin, adminController.getAllUsers)

// Update user details
router.put('/modify/:userId', authMiddleware.authenticateToken, authMiddleware.authorizeAdmin, adminController.updateUserByAdmin)

// Delete user details
router.delete('/delete/:userId', authMiddleware.authenticateToken, authMiddleware.authorizeAdmin, adminController.deleteUserByAdmin)

module.exports = router