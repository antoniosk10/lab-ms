import React, { useState } from 'react'
import {
  AddTodoMutationVariables,
  CompleteTodoMutationVariables,
  FullUpdateTodoMutationVariables,
  RemoveTodoMutationVariables,
  TodoListQuery,
  UpdateTodoMutationVariables
} from '../../graphql/todo.generated'
import { Grid, List, ListItem, ListItemText } from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type Props = {
  list: TodoListQuery['todos']
  onTodoCreate: (variables: AddTodoMutationVariables) => Promise<void>
  onTodoUpdate: (variables: UpdateTodoMutationVariables) => Promise<void>
  onTodoComplete: (variables: CompleteTodoMutationVariables) => Promise<void>
  onTodoFullUpdate: (variables: FullUpdateTodoMutationVariables) => Promise<void>
  onTodoRemove: (variables: RemoveTodoMutationVariables) => Promise<void>
}

function WelcomeDetail({ list, onTodoCreate, onTodoUpdate, onTodoComplete, onTodoFullUpdate, onTodoRemove }: Props) {
  const [newTodoValue, setNewTodoValue] = useState('')
  const [updateTodoValue, setUpdateTodoValue] = useState('')
  const [editTodoId, setEditTodoId] = useState(0)
  
  return (
    <Box>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12}>
          <Typography>Todo list</Typography>
          <List>
            {list?.map((item) => {
              const id = item?.id!
              const completed = item?.completed
              
              return (
                <ListItem key={id}>
                  {editTodoId !== id ? (
                    <>
                      <ListItemText>
                        {item?.title}
                        <button onClick={() => setEditTodoId(id)}>Edit</button>
                      </ListItemText>
                      <Typography
                        onClick={() => onTodoComplete({ id, completed: !completed })}>
                        {completed ? 'Completed' : 'Not completed'}
                      </Typography>
                      <button onClick={() => onTodoRemove({ id })}>X</button>
                    </>
                  ) : (
                    <>
                      <input
                        name="update" value={updateTodoValue}
                        onChange={event => setUpdateTodoValue(event.target.value)}
                      />
                      <button onClick={async () => {
                        setEditTodoId(0)
                        await onTodoUpdate({ id, title: updateTodoValue })
                      }}>Update
                      </button>
                      <button onClick={async () => {
                        setEditTodoId(0)
                        await onTodoFullUpdate({ id, title: updateTodoValue, completed: true })
                      }}>
                        Full update
                      </button>
                    </>
                  )}
                </ListItem>
              )
            })
            }
          </List>
          
          <input name="newTodo" value={newTodoValue} onChange={event => setNewTodoValue(event.target.value)}/>
          
          <Box mt={2}>
            <button onClick={() => onTodoCreate({ title: newTodoValue })}>Add todo</button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WelcomeDetail
