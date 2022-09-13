export const SET_AUTHORS = 'SET_AUTHORS'
export const ADD_AUTHORS = 'ADD_AUTHORS'

export function setAuthors(authors) {
  return {
    type: SET_AUTHORS,
    payload: authors,
  }
}
