const express = require('express')

const app = express()
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'some messageff 222 3 fasfas fasdsfasdf afdsasdfdas fdsa dsfdsadaffS 1111 2222 333'
  })
})

module.exports = app