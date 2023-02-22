import type { AppProps } from 'next/app'
import { LayoutPageType } from '@src/types'
import { ApolloProvider } from 'lab-api'
import { apolloClient } from '@src/api/apollo-client'

type LayoutAppProps = AppProps & {
  Component: LayoutPageType
}


export default function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  )
}
