import { ApolloClient, InMemoryCache } from '@apollo/client'

export const initApolloClient = (uri: string) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache()
  })
}