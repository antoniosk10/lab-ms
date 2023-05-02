import WelcomeDetail from '@modules/welcome/components/WelcomeDetail'
import LabLayout from '@src/layouts/LabLayout'
import React from 'react'

import {
  AddTodoMutationVariables,
  CompleteTodoMutationVariables,
  FullUpdateTodoMutationVariables,
  RemoveTodoMutationVariables,
  UpdateTodoMutationVariables,
} from '../graphql/todo.generated'
import {
  useTodoAdd,
  useTodoComplete,
  useTodoFullUpdate,
  useTodoList,
  useTodoRemove,
  useTodoUpdate,
} from '../services'

function WelcomeDetailContainer() {
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

  const handleTodoComplete = async (
    variables: CompleteTodoMutationVariables
  ) => {
    await completeTodo({ variables })
    await todoList.refetch()
  }

  const handleTodoFullUpdate = async (
    variables: FullUpdateTodoMutationVariables
  ) => {
    await fullUpdateTodo({ variables })
    await todoList.refetch()
  }

  const handleTodoRemove = async (variables: RemoveTodoMutationVariables) => {
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

WelcomeDetailContainer.getLayout = function getLayout(page: React.ReactNode) {
  return <LabLayout activeTab={false}>{page}</LabLayout>
}
