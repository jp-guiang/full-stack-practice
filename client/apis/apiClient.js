import request from 'superagent'

const rootUrl = '/api/v1'

export function getAuthors() {
  console.log('Getting Authors')
  return request.get(rootUrl + '/authors').then((res) => {
    console.log(res.body)
    return res.body
  })
}
