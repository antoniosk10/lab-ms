import type { AppProps } from 'next/app'
import { LayoutPageType } from '@src/types'
import { ApolloProvider } from 'lab-api'
import { apolloClient } from '@src/api/apollo-client'
import { ThemeProvider } from '@mui/material'
import { theme } from '@src/theme'
import createEmotionCache from '@src/utils/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'

type LayoutAppProps = AppProps & {
  Component: LayoutPageType
  // emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

function App({
               Component,
               // emotionCache = clientSideEmotionCache,
               pageProps
             }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return (
    // <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </ThemeProvider>
    // </CacheProvider>
  )
}

export default App
