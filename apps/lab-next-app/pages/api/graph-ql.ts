// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import { buildSchema } from 'type-graphql'

// import { DogsResolver } from '@src/graphql/schema/dog.resolver'

// const schema = await buildSchema({
//   resolvers: [DogsResolver]
// })
//
// const server = new ApolloServer({
//   schema
// })
//
// export const config = {
//   api: {
//     bodyParser: 'false'
//   }
// }

// export default startServerAndCreateNextHandler(server)
