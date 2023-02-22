import { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client/core'
import { QueryHookOptions, QueryResult } from '@apollo/client/react/types/types'
import { useQuery as useApolloQuery} from '@apollo/client'

type UseQueryResult<TData, TVariables extends OperationVariables = OperationVariables> =
  Omit<QueryResult<TData, TVariables>, 'data'>
  & { data: TData | {} }

export const useQuery = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>
): UseQueryResult<TData, TVariables> => {
  const { data, ...rest } = useApolloQuery(query, options)

  const safeData = data || {}

  return {
    ...rest,
    data: safeData
  }
}