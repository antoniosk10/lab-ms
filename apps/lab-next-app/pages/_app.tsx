import { CssBaseline, ThemeProvider } from '@mui/material'
import { apolloClient } from '@src/api/apollo-client'
import { theme } from '@src/theme'
import { LayoutRolePageType } from '@src/types'
import { ApolloProvider } from 'lab-api'
import type { AppProps } from 'next/app'

import { UserProvider } from '@/src/context/userContext'

type LayoutAppProps = AppProps & {
  Component: LayoutRolePageType
}

function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={apolloClient}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
