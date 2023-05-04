import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import { useState } from 'react'

function WelcomeDetail() {
  const [newTodoValue, setNewTodoValue] = useState('')
  const [updateTodoValue, setUpdateTodoValue] = useState('')
  const [editTodoId, setEditTodoId] = useState(0)
  const router = useRouter()

  return <Box></Box>
}

export default WelcomeDetail
