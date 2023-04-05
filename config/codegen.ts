import { CodegenConfig } from '@graphql-codegen/cli'

import environment from './environment'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://lab-ms.uz/api/graphql',
  documents: [
    './**/src/**/*.graphql'
  ],
  generates: {
    [`${environment.graphqlGenPath}/`]: {
      // plugins: ['typescript']
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql'
      },
      hooks: { afterAllFileWrite: ['prettier --write'] }
    },
    [`${environment.projectPath}/`]: {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@gql-gen/graphql'
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      hooks: { afterAllFileWrite: ['prettier --write'] }
    }
  },
  ignoreNoDocuments: true
}

export default config
