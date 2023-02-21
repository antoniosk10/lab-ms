import { useQuery } from '@apollo/client'
import { graphql } from '@gql-gen/gql'

export const GET_BOOKS = graphql(/*GraphQL*/`
  query GetBooks {
    books {
      name
    }
  }
`)



export const useDogList = () => {

  const {data} = useQuery(GET_BOOKS)
}