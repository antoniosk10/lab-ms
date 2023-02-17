/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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

export type Dog = {
  __typename?: 'Dog';
  ageInWeeks: Scalars['Float'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String'];
  breed: Scalars['String'];
  color: Scalars['String'];
  description: Array<Scalars['String']>;
  fee: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['ID'];
  sex: Scalars['String'];
  weight: Scalars['Float'];
};

export type DogAttribute = {
  __typename?: 'DogAttribute';
  key: Scalars['ID'];
  value: Scalars['String'];
};

export type Hello = {
  __typename?: 'Hello';
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dogs: Array<Dog>;
  hellos: Array<Hello>;
};

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'Dog', name: string, ageInWeeks: number, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> }>, hellos: Array<{ __typename?: 'Hello', name: string }> };


export const GetDogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ageInWeeks"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hellos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetDogsQuery, GetDogsQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dog = {
  __typename?: 'Dog';
  ageInWeeks: Scalars['Float'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String'];
  breed: Scalars['String'];
  color: Scalars['String'];
  description: Array<Scalars['String']>;
  fee: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['ID'];
  sex: Scalars['String'];
  weight: Scalars['Float'];
};

export type DogAttribute = {
  __typename?: 'DogAttribute';
  key: Scalars['ID'];
  value: Scalars['String'];
};

export type Hello = {
  __typename?: 'Hello';
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dogs: Array<Dog>;
  hellos: Array<Hello>;
};

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'Dog', name: string, ageInWeeks: number, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> }>, hellos: Array<{ __typename?: 'Hello', name: string }> };


export const GetDogsDocument = gql`
    query GetDogs {
  dogs {
    name
    ageInWeeks
    attributes {
      key
      value
    }
  }
  hellos {
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetDogs(variables?: GetDogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogsQuery>(GetDogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetDogs', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;