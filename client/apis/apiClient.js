import request from 'superagent'

const rootUrl = '/api/v1'

export function getAuthors() {
  return request.get(rootUrl + '/authors').then((res) => {
    return res.body
  })
}

export function addAuthor(book, author) {
  return request
    .post(rootUrl + '/authors/add')
    .send({ book, author })
    .then((res) => res.body)
}
