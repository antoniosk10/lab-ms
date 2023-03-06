import React from 'react'
import { BookListQuery } from '../../graphql/book-list.generated'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import { useRouter } from 'next/router'

type Props = {
  books: BookListQuery['books']
}

const BoxStyled = styled(Box)({
  background: 'black',
  width: '500px',
  height: '500px',
  color: 'white'
})

function BookList({ books }: Props) {
  const router = useRouter()
  
  return (
    <>
      <Box sx={{
        background: 'red',
        width: '500px',
        height: '500px',
        color: 'white'
      }}>
        hello
      </Box>
      
      <BoxStyled onClick={() => router.push('/books/1')}>
        HI
      </BoxStyled>
      Book list,<br/>
      <Image src="/1.jpg" alt="hello" width={30} height={30} />
      {books.map(({ title, author }) => (
          <div key={title}>
            
            
            {title} {author}
          
          </div>
        )
      )}
    </>
  )
}

export default BookList
