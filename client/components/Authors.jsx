import React from 'react'
import { useSelector } from 'react-redux'

export default function Authors() {
  const authors = useSelector((state) => state.authorsRed)
  return (
    <>
      <h1>Authors go here</h1>
      <h2>List go here</h2>
      {authors.map(({ id, title, author }) => (
        <div key={id}>
          <li>
            {title} {author}
          </li>
        </div>
      ))}
    </>
  )
}
