const connection = require('./connection')

function getAuthors(db = connection) {
  return db('stuff').select()
}

function addAuthor(author, db = connection) {
  return db('stuff').insert(author)
}

function getAuthorById(id, db = connection) {
  return db('stuff').where('id', id).select().first()
}

module.exports = {
  getAuthors,
  addAuthor,
  getAuthorById,
}
