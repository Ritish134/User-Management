const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const config = require('./config/config')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express()

// Connect to MongoDB
mongoose.connect(config.mongoURI)

// Middleware
app.use(express.json())

// Serve uploaded image statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/admin', adminRoutes)

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})