const express = require('express')
const { body } = require('express-validator')
const authController = require('../controllers/authController')

const router = express.Router()

// Signup route
router.post('/signup', [
    body('email').isEmail(),
    body('phone').isMobilePhone(),
    body('name').notEmpty(),
    body('password').isLength({ min: 6 }),

], authController.signup)


// Login route
router.post('/login', [
    body('email').isEmail(),
    body('phone').isMobilePhone(),
    body('password').isLength({ min: 6 }),

], authController.login)

module.exports = router
