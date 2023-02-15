import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type LayoutPageType<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

