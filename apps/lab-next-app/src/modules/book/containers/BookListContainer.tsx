import React from 'react'
import BookList from '../components/BookList'
import { useBookList } from '../services'
import { emptyArray } from '@src/constants/empty'

function BookDetailContainer() {
  const { data, loading } = useBookList()

  return (
    <BookList books={data?.books || emptyArray}/>
  )
}

export default BookDetailContainer
