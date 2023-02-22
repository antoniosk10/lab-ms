import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { DogsResolver } from '../graph-ql/schema/dog/dogs.resolver'
import { buildSchema } from 'type-graphql'
import { BookResolver } from '@src/graph-ql/schema/book/book.resolver'

export const startGraphQLServer = async (port: number | string) => {
  const schema = await buildSchema({
    resolvers: [BookResolver, DogsResolver]
  })

  const server = new ApolloServer({
    schema
  })

  await startStandaloneServer(server, {
    listen: {
      port: typeof port === 'string' ? parseInt(port) : port
    }
  })
}