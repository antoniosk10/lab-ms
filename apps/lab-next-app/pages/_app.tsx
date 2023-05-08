import { CssBaseline, ThemeProvider } from '@mui/material'
import { apolloClient } from '@src/api/apollo-client'
import { theme } from '@src/theme'
import { LayoutRolePageType } from '@src/types'
import { Provider } from 'jotai'
import { ApolloProvider } from 'lab-api'
import type { AppProps } from 'next/app'

type LayoutAppProps = AppProps & {
  Component: LayoutRolePageType
}

function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <CssBaseline />
        <ApolloProvider client={apolloClient}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default App
