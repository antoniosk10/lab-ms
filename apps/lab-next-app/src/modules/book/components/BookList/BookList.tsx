import React from 'react'
import { GetBookListQuery } from '@gql-gen/graphql'

type Props = {
  books: GetBookListQuery['books']
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
