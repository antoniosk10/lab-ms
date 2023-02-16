import * as path from 'path'

const projectRootPath = path.resolve(__dirname, '../', 'apps', 'lab-next-app')

export default {
  projectPath: projectRootPath,
  graphqlGenPath: path.resolve(projectRootPath, 'src', 'graphql-gen')
}
