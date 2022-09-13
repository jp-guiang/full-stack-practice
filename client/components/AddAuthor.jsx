import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewAuthor } from '../actions/authorsActions'
const initialForm = {
  book: ' ',
  author: ' ',
}

export default function AddAuthor() {
  const [form, setForm] = useState(initialForm)
  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()

    dispatch(addNewAuthor(form.book, form.author))
    setForm(initialForm)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const newForm = { ...form, [name]: value }

    setForm(newForm)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="book">
              Book Name:
              <input
                id={'book'}
                onChange={handleChange}
                value={form.book}
                name="book"
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="author">
              Author Name:
              <input
                id={'author'}
                onChange={handleChange}
                value={form.author}
                name="author"
              ></input>
            </label>
          </div>
          <div></div>

          <input type="submit"></input>
        </form>
      </div>
    </>
  )
}
