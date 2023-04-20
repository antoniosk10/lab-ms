import { ROLES } from '@src/constants/roles'
import { ValuesOfObject } from '@src/utils/types'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type LayoutPageType<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type LayoutRolePageType<
  P = Record<string, never>,
  IP = P
> = LayoutPageType<P, IP> & {
  roles: ValuesOfObject<typeof ROLES>[]
}

export type MenuOption = {
  name: string
  action: () => void
}

export type CommentType = {
  id: number
  author: string
  date: string
  text: string
  avatar: string
  subComments: Omit<CommentType, 'subComments'>[]
}
