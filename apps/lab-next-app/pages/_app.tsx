import type { AppProps } from 'next/app'
import { LayoutPageType, LayoutRolePageType } from '@src/types'
import { ApolloProvider } from 'lab-api'
import { apolloClient } from '@src/api/apollo-client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@src/theme'

type LayoutAppProps = AppProps & {
  Component: LayoutRolePageType
}


function App({
               Component,
               pageProps
             }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const roles = Component.roles
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
