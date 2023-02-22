import { useQuery } from '@apollo/client'
import { GET_BOOK_LIST } from '@src/modules/book/queries'

export const useBookList = () => {
  return useQuery(GET_BOOK_LIST)
}


