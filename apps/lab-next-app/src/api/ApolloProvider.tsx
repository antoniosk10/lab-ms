import {
  ApolloClient,
  ApolloLink,
  ApolloProvider as ApolloProviderOriginal,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client'
import { useSnackbar } from 'notistack'
import { ReactNode, useMemo } from 'react'

type Props = {
  children: ReactNode
}

export const ApolloProvider = ({ children }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const httpLink = useMemo(
    () => new HttpLink({ uri: 'https://labms.uz/api/graphql' }),
    []
  )

  const catchNonFieldErrorsLink = useMemo(
    () =>
      new ApolloLink((operation, forward) => {
        return forward(operation).map((data) => {
          if (data.data?.error.nonFieldError.length) {
            data.data?.error.nonFieldError.forEach((errorMessage: string) => {
              enqueueSnackbar(errorMessage, { variant: 'error' })
            })
          }

          return data
        })
      }),
    [enqueueSnackbar]
  )

  const client = useMemo(
    () =>
      new ApolloClient({
        link: from([catchNonFieldErrorsLink, httpLink]),
        cache: new InMemoryCache(),
      }),
    [catchNonFieldErrorsLink, httpLink]
  )

  return (
    <ApolloProviderOriginal client={client}>{children}</ApolloProviderOriginal>
  )
}
