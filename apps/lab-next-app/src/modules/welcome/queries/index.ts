import {  graphql } from '@gql-gen/gql'

export const GET_BOOKS = graphql(`#graphql
query GetBooks {
  books {
    name
  }
}`)

