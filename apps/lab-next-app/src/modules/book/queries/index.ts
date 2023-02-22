import { graphql } from '@gql-gen/gql'

import { GetBookListQuery } from '@gql-gen/graphql'

type Param = Parameters<typeof graphql>[0]
const param: Param = `query GetBookList {
  books {
    author
    title
  }
}`



export const GET_BOOK_LIST = graphql(param)