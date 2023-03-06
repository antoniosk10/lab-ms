import React from 'react'
import BookList from '../components/BookList'
import { useBookList } from '../services'
import { emptyArray } from '@src/constants/empty'
import LabLayout from '@src/layouts/LabLayout'

function BookDetailContainer() {
  const { data, loading } = useBookList()

  return (
    <LabLayout>
      <BookList books={data?.books || emptyArray}/>
    </LabLayout>
  )
}

export default BookDetailContainer
