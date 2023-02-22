import React from 'react'
import { BookListQuery } from '../../graphql/book-list.generated'

type Props = {
  books: BookListQuery['books']
}

function BookList({ books }: Props) {
  return (
    <>
      Book list,<br/>
      {books.map(({ title, author }) => (
          <div key={title}>{title} {author}</div>
        )
      )}
    </>
  )
}

export default BookList
