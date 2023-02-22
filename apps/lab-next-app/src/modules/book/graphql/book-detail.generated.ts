import * as Types from '@gql-gen/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type BookDetailQueryVariables = Types.Exact<{
  title: Types.Scalars['String'];
}>;


export type BookDetailQuery = { __typename?: 'Query', book: { __typename?: 'Book', title: string, author: string, name: string } };


export const BookDetailDocument = gql`
    query BookDetail($title: String!) {
  book(title: $title) {
    title
    author
    name
  }
}
    `;

/**
 * __useBookDetailQuery__
 *
 * To run a query within a React component, call `useBookDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookDetailQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useBookDetailQuery(baseOptions: Apollo.QueryHookOptions<BookDetailQuery, BookDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookDetailQuery, BookDetailQueryVariables>(BookDetailDocument, options);
      }
export function useBookDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookDetailQuery, BookDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookDetailQuery, BookDetailQueryVariables>(BookDetailDocument, options);
        }
export type BookDetailQueryHookResult = ReturnType<typeof useBookDetailQuery>;
export type BookDetailLazyQueryHookResult = ReturnType<typeof useBookDetailLazyQuery>;
export type BookDetailQueryResult = Apollo.QueryResult<BookDetailQuery, BookDetailQueryVariables>;