const express = require('express')

const db = require('../db/authorsDb')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('hit route')
  db.getAuthors()
    .then((authorsList) => {
      console.log(authorsList)
      res.json(authorsList)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Nice try hacker' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getAuthorById(id)
    .then((author) => res.json(author))
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/add', (req, res) => {
  const author = req.body
  db.addAuthor(author)
    .then((authorId) => db.getAuthorById(authorId))
    .then((author) => res.json(author))
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Nice try hacker' })
    })
})

module.exports = router
