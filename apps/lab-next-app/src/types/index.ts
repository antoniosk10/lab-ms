import { ROLES } from '@src/constants/roles'
import { ValuesOfObject } from '@src/utils/types'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { GraphQLError } from 'graphql/error'

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

export type ErrorsField = {
  fieldErrors: {
    location: string[]
    message: string
    type: string
  }[]
  nonFieldErrors: string[]
  errorCode: number
}

type ServiceResponse = {
  result:Record<string, any>,
  errors:ErrorsField
}

export type GraphQLResponse = {
  data:{
    [key: string]: ServiceResponse
  },
  errors?: GraphQLError[]
}

export type GraphQLErrors = GraphQLError[] | ErrorsField

export type GraphQLLinkError = Record<string,unknown> & {networkError:GraphQLErrors}