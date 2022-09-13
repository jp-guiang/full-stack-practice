import { SET_AUTHORS, ADD_AUTHOR } from '../actions/authorsActions'

const initialState = [
  { id: 1, book: 'Ready Player One', author: 'Ernest Cline' },
  {
    id: 2,
    book: 'How to win friends and influence people',
    author: 'Dale Carnegie',
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_AUTHORS:
      return payload
    case ADD_AUTHOR:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
