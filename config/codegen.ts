import { CodegenConfig } from '@graphql-codegen/cli'
import environment from './environment'

const config: CodegenConfig = {
  overwrite: true,
  // schema: 'https://spacex-production.up.railway.app/',
  // schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  // schema: 'http://localhost:3000/api/graph-ql',
  schema: 'http://localhost:8081',
  documents: [
    `./**/src/**/*.graphql`,
  ],
  require: [
    "ts-node/register"
  ],
  generates: {
    [`${environment.graphqlGenPath}/`]: {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
        'typescript-graphql-request'
      ]
    }
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
  ignoreNoDocuments: true
}

export default config
