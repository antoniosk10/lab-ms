import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@src/theme'
import { LayoutRolePageType } from '@src/types'
import { Provider } from 'jotai'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { ApolloProvider } from '@src/api/ApolloProvider'

type LayoutAppProps = AppProps & {
  Component: LayoutRolePageType
}

function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <ApolloProvider>
            {getLayout(<Component {...pageProps} />)}
          </ApolloProvider>
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default App
