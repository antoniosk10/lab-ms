import { GraphQLErrors, GraphQLResponse } from '@src/types'

export const reorderDraggableList = <T>(
  list: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  
  return result
}

export const checkResponseErrors = (response: GraphQLResponse) => {
  if (response.errors) {
    throw response.errors
  }
  
  const responseObject = Object.values(response.data)[0]
  
  if (responseObject.errors) {
    throw responseObject.errors
  }
}

export const isFieldErrors = (error: GraphQLErrors): boolean => 'fieldErrors' in error
