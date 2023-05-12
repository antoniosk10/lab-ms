/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Course = {
  __typename?: 'Course';
  author_id?: Maybe<Scalars['String']>;
  cover_pic_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_published?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type Login = {
  __typename?: 'Login';
  token?: Maybe<Scalars['String']>;
};

export type RootQueries = {
  __typename?: 'RootQueries';
  course?: Maybe<Course>;
  courses?: Maybe<Array<Maybe<Course>>>;
  login?: Maybe<Login>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  validate?: Maybe<Validate>;
};


export type RootQueriesCourseArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueriesCoursesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};


export type RootQueriesLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type RootQueriesUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type RootQueriesUsersArgs = {
  id?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type RootQueriesValidateArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type TodoMutations = {
  __typename?: 'TodoMutations';
  registerUser?: Maybe<User>;
};


export type TodoMutationsRegisterUserArgs = {
  avatar_url?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatar_url?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type Validate = {
  __typename?: 'Validate';
  error?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type CourseQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CourseQuery = { __typename?: 'RootQueries', course?: { __typename?: 'Course', id?: string | null, name?: string | null, description?: string | null } | null };

export type CoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type CoursesQuery = { __typename?: 'RootQueries', courses?: Array<{ __typename?: 'Course', id?: string | null, name?: string | null, description?: string | null } | null> | null };


export const CourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Course"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CourseQuery, CourseQueryVariables>;
export const CoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CoursesQuery, CoursesQueryVariables>;