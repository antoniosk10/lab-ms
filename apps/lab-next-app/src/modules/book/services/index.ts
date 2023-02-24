import { useBookListQuery } from '../graphql/book-list.generated'
import { useBookDetailQuery } from '../graphql/book-detail.generated'

export const useBookList = () => {
  return useBookListQuery()
}

export const useBookDetail = (title: string) => {
  return useBookDetailQuery ({
    ssr: true,
    variables: {
      title
    }
  })
}
