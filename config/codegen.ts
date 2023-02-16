import { CodegenConfig } from '@graphql-codegen/cli'
import environment from './environment'

const config: CodegenConfig = {
  // schema: 'https://spacex-production.up.railway.app/',
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: [
    `./**/*.ts`,
    `./**/*.tsx`,
  ],
  generates: {
    [`${environment.graphqlGenPath}/`]: {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
      ],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
}

export default config