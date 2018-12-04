const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const analiticsRoutes = require('./routes/analitics')
const mongoose = require('mongoose')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI)
	.then(() => console.log('MongoDB connected.'))
	.catch(error => console.log(1, error)) 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('morgan')('dev'))
app.use(require('cors')())

// localhost:3000/api/auth/login
app.use('/api/auth', authRoutes)
app.use('/api/analitics', analiticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app