import type { AppProps } from 'next/app'
import { LayoutPageType } from '@src/types'

type LayoutAppProps = AppProps & {
  Component: LayoutPageType
}

export default function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
