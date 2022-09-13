import React from 'react'
import { useSelector } from 'react-redux'

export default function Authors() {
  const authors = useSelector((state) => state.authorsRed)

  return (
    <>
      <h2>Authors</h2>
      {authors?.map(({ id, book, author }) => (
        <div key={id}>
          <li key={id}>
            {book}: {author}
          </li>
        </div>
      ))}
    </>
  )
}
