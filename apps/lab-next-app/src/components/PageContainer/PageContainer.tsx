import React from 'react'
import Box from '@mui/material/Box'

type Props = {
  children: React.ReactNode
}

function PageContainer ({ children }: Props) {
  return (
    <Box my={3}>
      {children}
    </Box>
  )
}

export default PageContainer
