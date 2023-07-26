import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchema } from 'type-graphql'
import { CourseResolver } from '@src/graph-ql/schema/course/course.resolver'
import { UsersResolver } from '@src/graph-ql/schema/user/users.resolver'

export const startGraphQLServer = async (port: number | string) => {
  const schema = await buildSchema({
    resolvers: [CourseResolver, UsersResolver]
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
