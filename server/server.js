const express = require('express')

const path = require('path')

const server = express()

const userRoutes = require('./routes/authorRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/authors', userRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
