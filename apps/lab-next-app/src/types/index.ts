import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { ROLES } from '@src/constants/roles'
import { ValuesOfObject } from '@src/utils/types'

export type LayoutPageType<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type LayoutRolePageType<P = {}, IP = P> = LayoutPageType & {
  roles: ValuesOfObject<typeof ROLES>[]
}