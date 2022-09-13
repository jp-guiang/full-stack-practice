import React, { useEffect } from 'react'
import Authors from './Authors'
import AddAuthor from './AddAuthor'
import { useDispatch } from 'react-redux'
import { fetchAuthors } from '../actions/authorsActions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchAuthors()), [])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <AddAuthor />
        <Authors />
      </section>
    </>
  )
}

export default App
