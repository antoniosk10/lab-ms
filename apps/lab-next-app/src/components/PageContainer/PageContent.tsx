import React from 'react'
import Box from '@mui/material/Box'

type Props = {
  children: React.ReactNode | string
}

function PageContent ({ children }: Props) {
  return (
    <Box>{children}</Box>
  )
}

export default PageContent
