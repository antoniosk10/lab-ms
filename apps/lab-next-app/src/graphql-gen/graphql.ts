/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: "Book";
  author: Scalars["String"];
  name: Scalars["String"];
  title: Scalars["ID"];
};

export type Dog = {
  __typename?: "Dog";
  ageInWeeks: Scalars["Float"];
  attributes: Array<DogAttribute>;
  availableDate: Scalars["String"];
  breed: Scalars["String"];
  color: Scalars["String"];
  description: Array<Scalars["String"]>;
  fee: Scalars["Float"];
  image: Scalars["String"];
  name: Scalars["ID"];
  sex: Scalars["String"];
  weight: Scalars["Float"];
};

export type DogAttribute = {
  __typename?: "DogAttribute";
  key: Scalars["ID"];
  value: Scalars["String"];
};

export type Hello = {
  __typename?: "Hello";
  name: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  book: Book;
  books: Array<Book>;
  dogs: Array<Dog>;
  hellos: Array<Hello>;
};

export type QueryBookArgs = {
  title: Scalars["String"];
};

export type GetBookDetailQueryVariables = Exact<{
  title: Scalars["String"];
}>;

export type GetBookDetailQuery = {
  __typename?: "Query";
  book: { __typename?: "Book"; title: string; author: string; name: string };
};

export type GetBookListQueryVariables = Exact<{ [key: string]: never }>;

export type GetBookListQuery = {
  __typename?: "Query";
  books: Array<{ __typename?: "Book"; author: string; title: string }>;
};

export const GetBookDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBookDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "book" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "title" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "title" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "author" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBookDetailQuery, GetBookDetailQueryVariables>;
export const GetBookListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBookList" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "books" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "author" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBookListQuery, GetBookListQueryVariables>;
