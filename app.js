const express = require('express')
const authRoutes = require('./routes/auth')
const analiticsRoutes = require('./routes/analitics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const app = express()

// localhost:3000/api/auth/login
app.use('/api/auth', authRoutes)
app.use('/api/analitics', analiticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app