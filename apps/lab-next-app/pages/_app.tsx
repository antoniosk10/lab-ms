import type { AppProps } from 'next/app'
import { LayoutPageType } from '@src/types'
import { ApolloProvider, initApolloClient } from 'lab-api'

type LayoutAppProps = AppProps & {
  Component: LayoutPageType
}
/*
const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache()
})
*/

const client = initApolloClient('http://localhost:3000/api/graph-ql')


export default function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={client}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  )
}
