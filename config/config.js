require('dotenv').config()
module.exports = {
    mongoURI: `${process.env.mongoURI}`,
    jwtSecret: 'f6ab7ea533af505fe663f2abed772b2ece6fd8bca7a816b4a940f239e59f1068'
}