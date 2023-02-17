import { CodegenConfig } from '@graphql-codegen/cli'
import environment from './environment'

const config: CodegenConfig = {
  // schema: 'https://spacex-production.up.railway.app/',
  // schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  schema: 'http://localhost:3000/api/graph-ql',
  documents: [
    `./**/src/**/*.graphql`,
  ],
  generates: {
    [`${environment.graphqlGenPath}/`]: {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
