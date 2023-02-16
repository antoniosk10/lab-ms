import type { AppProps } from 'next/app'
import { LayoutPageType } from '@src/types'
import { ApolloProvider, initApolloClient } from 'lab-api'
import { ApolloClient, InMemoryCache } from '@apollo/client'

type LayoutAppProps = AppProps & {
  Component: LayoutPageType
}

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache()
})


export default function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={client}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  )
}
