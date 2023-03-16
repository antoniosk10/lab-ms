import {
  useAddTodoMutation,
  useTodoQuery,
  useTodoListQuery,
  useUpdateTodoMutation,
  useCompleteTodoMutation, useFullUpdateTodoMutation, useRemoveTodoMutation
} from '../graphql/todo.generated'

export const useTodoDetail = (id: number) => {
  return useTodoQuery({
    variables: { id }
  })
}

export const useTodoList = () => {
  return useTodoListQuery()
}

export const useTodoAdd = () => {
  return useAddTodoMutation()
}

export const useTodoUpdate = () => {
  return useUpdateTodoMutation()
}

export const useTodoComplete = () => {
  return useCompleteTodoMutation()
}

export const useTodoFullUpdate = () => {
  return useFullUpdateTodoMutation()
}

export const useTodoRemove = () => {
  return useRemoveTodoMutation()
}