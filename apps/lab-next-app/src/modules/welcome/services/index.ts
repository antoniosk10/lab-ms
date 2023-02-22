import { useQuery } from '@apollo/client'
import { graphql } from '@gql-gen/gql'

type A = Parameters<typeof graphql>[0]

const argument: A = `query GetDogs {
  dogs {
    name
  }
}`

export const GET_BOOKS = graphql(argument)



export const useDogList = () => {

  const {data} = useQuery(GET_BOOKS)
}