/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    result {\n      token\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        location\n        message\n        type\n      }\n      errorCode\n    }\n  }\n}\n\nmutation RegisterUser($email: String!, $password: String!, $password_confirmation: String!, $first_name: String!, $last_name: String!, $birthday: String!, $role: String!) {\n  registerUser(\n    email: $email\n    password: $password\n    password_confirmation: $password_confirmation\n    first_name: $first_name\n    last_name: $last_name\n    birthday: $birthday\n    role: $role\n  ) {\n    result {\n      email\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        location\n        message\n        type\n      }\n      errorCode\n    }\n  }\n}": types.LoginDocument,
    "query Course($id: String!) {\n  course(id: $id) {\n    result {\n      id\n      name\n      description\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        type\n        message\n        location\n      }\n      errorCode\n    }\n  }\n}\n\nquery Courses {\n  courses {\n    result {\n      id\n      name\n      description\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        type\n        message\n        location\n      }\n      errorCode\n    }\n  }\n}": types.CourseDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    result {\n      token\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        location\n        message\n        type\n      }\n      errorCode\n    }\n  }\n}\n\nmutation RegisterUser($email: String!, $password: String!, $password_confirmation: String!, $first_name: String!, $last_name: String!, $birthday: String!, $role: String!) {\n  registerUser(\n    email: $email\n    password: $password\n    password_confirmation: $password_confirmation\n    first_name: $first_name\n    last_name: $last_name\n    birthday: $birthday\n    role: $role\n  ) {\n    result {\n      email\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        location\n        message\n        type\n      }\n      errorCode\n    }\n  }\n}"): (typeof documents)["mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    result {\n      token\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        location\n        message\n        type\n      }\n      errorCode\n    }\n  }\n}\n\nmutation RegisterUser($email: String!, $password: String!, $password_confirmation: String!, $first_name: String!, $last_name: String!, $birthday: String!, $role: String!) {\n  registerUser(\n    email: $email\n    password: $password\n    password_confirmation: $password_confirmation\n    first_name: $first_name\n    last_name: $last_name\n    birthday: $birthday\n    role: $role\n  ) {\n    result {\n      email\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        location\n        message\n        type\n      }\n      errorCode\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Course($id: String!) {\n  course(id: $id) {\n    result {\n      id\n      name\n      description\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        type\n        message\n        location\n      }\n      errorCode\n    }\n  }\n}\n\nquery Courses {\n  courses {\n    result {\n      id\n      name\n      description\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        type\n        message\n        location\n      }\n      errorCode\n    }\n  }\n}"): (typeof documents)["query Course($id: String!) {\n  course(id: $id) {\n    result {\n      id\n      name\n      description\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        type\n        message\n        location\n      }\n      errorCode\n    }\n  }\n}\n\nquery Courses {\n  courses {\n    result {\n      id\n      name\n      description\n    }\n    errors {\n      nonFieldErrors\n      fieldErrors {\n        type\n        message\n        location\n      }\n      errorCode\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;