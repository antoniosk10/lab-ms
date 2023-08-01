import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as ApolloProviderOriginal,
  from,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import { ReactNode } from 'react'
import { checkResponseErrors } from '@src/utils/utils'
import { GraphQLResponse } from '@src/types'

type Props = {
  children: ReactNode
}

const httpLink = new HttpLink({ uri: 'http://localhost:8081' })

const catchErrorsLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    checkResponseErrors(data as GraphQLResponse)
    return data
  })
})

const client = new ApolloClient({
  link: from([catchErrorsLink, httpLink]),
  cache: new InMemoryCache()
})

export const ApolloProvider = ({ children }: Props) => {
  return (
    <ApolloProviderOriginal client={client}>{children}</ApolloProviderOriginal>
  )
}
