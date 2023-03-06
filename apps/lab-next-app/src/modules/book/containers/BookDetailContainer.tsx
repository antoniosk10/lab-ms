import React from 'react'
import LabLayout from '@src/layouts/LabLayout'
import BookDetail from '@pages/book/components/BookDetail'

type Props = Record<string, unknown>

function BookDetailContainer(props: Props) {
  console.log(props)
  
  return (
    <LabLayout>
      <BookDetail book={{ title: 'hello', author: 'hi', name: 'hello' }}/>
    </LabLayout>
  )
}

export default BookDetailContainer
