import { getAuthors } from '../apis/apiClient'

export const SET_AUTHORS = 'SET_AUTHORS'
export const ADD_AUTHORS = 'ADD_AUTHORS'

export function setAuthors(authors) {
  return {
    type: SET_AUTHORS,
    payload: authors,
  }
}

export function fetchAuthors() {
  return (dispatch) => {
    return getAuthors().then((authors) => {
      console.log(authors)
      dispatch(setAuthors(authors))
    })
  }
}
