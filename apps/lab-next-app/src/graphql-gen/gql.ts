/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

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
    "query Todo($id: Int!) {\n  todo(id: $id) {\n    id\n    title\n    completed\n  }\n}\n\nquery TodoList {\n  todos {\n    id\n    title\n    completed\n  }\n}\n\nmutation AddTodo($title: String!) {\n  addTodo(title: $title) {\n    id\n    title\n  }\n}\n\nmutation UpdateTodo($id: Int!, $title: String!) {\n  updateTodo(id: $id, title: $title)\n}\n\nmutation CompleteTodo($id: Int!, $completed: Boolean!) {\n  updateTodo(id: $id, completed: $completed)\n}\n\nmutation FullUpdateTodo($id: Int!, $title: String!, $completed: Boolean) {\n  updateTodo(id: $id, title: $title, completed: $completed)\n}\n\nmutation RemoveTodo($id: Int!) {\n  deleteTodo(id: $id)\n}": types.TodoDocument,
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
export function gql(source: "query Todo($id: Int!) {\n  todo(id: $id) {\n    id\n    title\n    completed\n  }\n}\n\nquery TodoList {\n  todos {\n    id\n    title\n    completed\n  }\n}\n\nmutation AddTodo($title: String!) {\n  addTodo(title: $title) {\n    id\n    title\n  }\n}\n\nmutation UpdateTodo($id: Int!, $title: String!) {\n  updateTodo(id: $id, title: $title)\n}\n\nmutation CompleteTodo($id: Int!, $completed: Boolean!) {\n  updateTodo(id: $id, completed: $completed)\n}\n\nmutation FullUpdateTodo($id: Int!, $title: String!, $completed: Boolean) {\n  updateTodo(id: $id, title: $title, completed: $completed)\n}\n\nmutation RemoveTodo($id: Int!) {\n  deleteTodo(id: $id)\n}"): (typeof documents)["query Todo($id: Int!) {\n  todo(id: $id) {\n    id\n    title\n    completed\n  }\n}\n\nquery TodoList {\n  todos {\n    id\n    title\n    completed\n  }\n}\n\nmutation AddTodo($title: String!) {\n  addTodo(title: $title) {\n    id\n    title\n  }\n}\n\nmutation UpdateTodo($id: Int!, $title: String!) {\n  updateTodo(id: $id, title: $title)\n}\n\nmutation CompleteTodo($id: Int!, $completed: Boolean!) {\n  updateTodo(id: $id, completed: $completed)\n}\n\nmutation FullUpdateTodo($id: Int!, $title: String!, $completed: Boolean) {\n  updateTodo(id: $id, title: $title, completed: $completed)\n}\n\nmutation RemoveTodo($id: Int!) {\n  deleteTodo(id: $id)\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;