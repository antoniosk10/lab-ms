import * as Types from '@gql-gen/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CourseQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type CourseQuery = { __typename?: 'Query', course: { __typename?: 'CourseResponse', result?: { __typename?: 'Course', id: string, name: string, description: string } | null, errors?: { __typename?: 'ErrorField', nonFieldErrors: Array<string>, errorCode: number, fieldErrors: Array<{ __typename?: 'FieldErrors', type: string, message: string, location: Array<string> }> } | null } };

export type CoursesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CoursesQuery = { __typename?: 'Query', courses: { __typename?: 'CoursesResponse', result?: Array<{ __typename?: 'Course', id: string, name: string, description: string }> | null, errors?: { __typename?: 'ErrorField', nonFieldErrors: Array<string>, errorCode: number, fieldErrors: Array<{ __typename?: 'FieldErrors', type: string, message: string, location: Array<string> }> } | null } };


export const CourseDocument = gql`
    query Course($id: String!) {
  course(id: $id) {
    result {
      id
      name
      description
    }
    errors {
      nonFieldErrors
      fieldErrors {
        type
        message
        location
      }
      errorCode
    }
  }
}
    `;

/**
 * __useCourseQuery__
 *
 * To run a query within a React component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCourseQuery(baseOptions: Apollo.QueryHookOptions<CourseQuery, CourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
      }
export function useCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseQuery, CourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
        }
export type CourseQueryHookResult = ReturnType<typeof useCourseQuery>;
export type CourseLazyQueryHookResult = ReturnType<typeof useCourseLazyQuery>;
export type CourseQueryResult = Apollo.QueryResult<CourseQuery, CourseQueryVariables>;
export const CoursesDocument = gql`
    query Courses {
  courses {
    result {
      id
      name
      description
    }
    errors {
      nonFieldErrors
      fieldErrors {
        type
        message
        location
      }
      errorCode
    }
  }
}
    `;

/**
 * __useCoursesQuery__
 *
 * To run a query within a React component, call `useCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCoursesQuery(baseOptions?: Apollo.QueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
      }
export function useCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
        }
export type CoursesQueryHookResult = ReturnType<typeof useCoursesQuery>;
export type CoursesLazyQueryHookResult = ReturnType<typeof useCoursesLazyQuery>;
export type CoursesQueryResult = Apollo.QueryResult<CoursesQuery, CoursesQueryVariables>;