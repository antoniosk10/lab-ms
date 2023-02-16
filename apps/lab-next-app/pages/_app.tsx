import type { AppProps } from 'next/app'
import { LayoutPageType } from '@src/types'
import { initApolloClient, ApolloProvider } from 'lab-api'

type LayoutAppProps = AppProps & {
  Component: LayoutPageType
}

const client = initApolloClient('https://flyby-gateway.herokuapp.com/')

export default function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={client}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  )
}
