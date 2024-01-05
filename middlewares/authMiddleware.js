const jwt = require('jsonwebtoken')
const config = require('../config/config')

function authenticateToken(req, res, next) {
    let token = req.header('Authorization')
    token = token.split(" ")[1]
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    jwt.verify(token, config.jwtSecret, (err, user) => {

        if (err) {
            return res.status(403).json({ err })
        }
        req.user = { userId: user.userId, role: user.role } // Set user information in the request object
        next()
    })
}

function authorizeAdmin(req, res, next) {
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Forbidden - Admin access required' })
    }
    next()
}

module.exports = {
    authenticateToken,
    authorizeAdmin
}