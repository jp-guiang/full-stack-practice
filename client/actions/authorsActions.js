import { getAuthors, addAuthor } from '../apis/apiClient'

export const SET_AUTHORS = 'SET_AUTHORS'
export const ADD_AUTHOR = 'ADD_AUTHOR'

export function setAuthors(authors) {
  return {
    type: SET_AUTHORS,
    payload: authors,
  }
}

export function createAuthor(info) {
  const { id, book, author } = info
  return {
    type: ADD_AUTHOR,
    payload: {
      id,
      book,
      author,
    },
  }
}

export function fetchAuthors() {
  return (dispatch) => {
    return getAuthors().then((authors) => {
      dispatch(setAuthors(authors))
    })
  }
}

export function addNewAuthor(book, author) {
  console.log(book, author)
  return (dispatch) => {
    return addAuthor(book, author).then((author) =>
      dispatch(createAuthor(author))
    )
  }
}
