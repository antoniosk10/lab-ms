import React from 'react'
import WelcomeDetail from '@pages/welcome/components/WelcomeDetail'
import { useTodoAdd, useTodoComplete, useTodoFullUpdate, useTodoList, useTodoRemove, useTodoUpdate } from '../services'
import {
  AddTodoMutationVariables,
  CompleteTodoMutationVariables, FullUpdateTodoMutationVariables, RemoveTodoMutationVariables,
  UpdateTodoMutationVariables
} from '../graphql/todo.generated'

type Props = Record<string, unknown>

function WelcomeDetailContainer(props: Props) {
  const todoList = useTodoList()
  const [addTodo] = useTodoAdd()
  const [updateTodo] = useTodoUpdate()
  const [fullUpdateTodo] = useTodoFullUpdate()
  const [completeTodo] = useTodoComplete()
  const [removeTodo] = useTodoRemove()
  
  const handleTodoCreate = async (variables: AddTodoMutationVariables) => {
    await addTodo({ variables })
    await todoList.refetch()
  }
  
  const handleTodoUpdate = async (variables: UpdateTodoMutationVariables) => {
    await updateTodo({ variables })
    await todoList.refetch()
  }
  
  const handleTodoComplete = async (variables: CompleteTodoMutationVariables) => {
    await completeTodo({ variables })
    await todoList.refetch()
  }
  
  const handleTodoFullUpdate = async (variables: FullUpdateTodoMutationVariables) => {
    await fullUpdateTodo({ variables })
    await todoList.refetch()
  }
  
  const handleTodoRemove= async (variables: RemoveTodoMutationVariables) => {
    await removeTodo({ variables })
    await todoList.refetch()
  }
  
  return (
    <WelcomeDetail
      list={todoList.data?.todos}
      onTodoCreate={handleTodoCreate}
      onTodoUpdate={handleTodoUpdate}
      onTodoComplete={handleTodoComplete}
      onTodoFullUpdate={handleTodoFullUpdate}
      onTodoRemove={handleTodoRemove}
    />
  )
}

export default WelcomeDetailContainer
