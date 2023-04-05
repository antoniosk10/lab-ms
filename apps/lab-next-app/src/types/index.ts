import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { ROLES } from '@src/constants/roles'
import { ValuesOfObject } from '@src/utils/types'

export type LayoutPageType<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type LayoutRolePageType<P = Record<string, never>, IP = P> = LayoutPageType<P, IP> & {
  roles: ValuesOfObject<typeof ROLES>[]
}
