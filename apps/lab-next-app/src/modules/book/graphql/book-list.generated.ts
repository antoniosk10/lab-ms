import * as Types from '@gql-gen/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BookListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BookListQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', author: string, title: string }> };


export const BookListDocument = gql`
    query BookList {
  books {
    author
    title
  }
}
    `;

/**
 * __useBookListQuery__
 *
 * To run a query within a React component, call `useBookListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookListQuery({
 *   variables: {
 *   },
 * });
 */
export function useBookListQuery(baseOptions?: Apollo.QueryHookOptions<BookListQuery, BookListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookListQuery, BookListQueryVariables>(BookListDocument, options);
      }
export function useBookListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookListQuery, BookListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookListQuery, BookListQueryVariables>(BookListDocument, options);
        }
export type BookListQueryHookResult = ReturnType<typeof useBookListQuery>;
export type BookListLazyQueryHookResult = ReturnType<typeof useBookListLazyQuery>;
export type BookListQueryResult = Apollo.QueryResult<BookListQuery, BookListQueryVariables>;