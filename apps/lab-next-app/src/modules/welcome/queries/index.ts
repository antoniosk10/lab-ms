import { gql } from '@gql-gen/gql'

export const GET_DOGS = gql(/*GraphQL*/`
    query GetDogs {
        dogs {
            description
            
        }
        hellos {
            name
        }
    }
`)

