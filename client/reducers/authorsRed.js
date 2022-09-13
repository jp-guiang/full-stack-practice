import { SET_AUTHORS, ADD_AUTHORS } from '../actions/authorsActions'

const initialState = [
  { id: 1, title: 'Ready Player One', author: 'Ernest Cline' },
  {
    id: 2,
    title: 'How to win friends and influence people',
    author: 'Dale Carnegie',
  },
]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_AUTHORS:
      return payload
    default:
      return state
  }
}

export default reducer
