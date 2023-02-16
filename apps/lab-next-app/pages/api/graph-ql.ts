// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { gql } from 'graphql-tag'


const resolvers = {
  Query: {
    hello: () => 'world'
  }
}


const typeDefs = gql(/* GraphQL */ `
  type Query {
    hello: String
  }
`)

const server = new ApolloServer({
  typeDefs,
  resolvers
})

export const config = {
  api: {
    bodyParser: 'false'
  }
}

export default startServerAndCreateNextHandler(server)