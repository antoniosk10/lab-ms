import { ApolloClient, InMemoryCache } from '@apollo/client'

export function initApolloClient (uri: string) {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache()
  })
}
