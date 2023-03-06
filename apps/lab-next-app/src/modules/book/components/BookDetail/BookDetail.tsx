import React from 'react'
import Image from 'next/image'
import { BookDetailQuery } from '@gql-gen/graphql'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

type Props = {
  book: BookDetailQuery['book']
}

function BookDetail({ book }: Props) {
  const router = useRouter()
  
  return (
    <>
      <Button
        onClick={() => router.push('/books')}
        sx={{
        background: 'blue',
        color: 'green'
      }}>
        Hello!
      </Button>
      Book detail,<br/>
      {book.title}
      <Image src="/1.jpg" alt="hello" width={30} height={30} />
    </>
  )
}

export default BookDetail
