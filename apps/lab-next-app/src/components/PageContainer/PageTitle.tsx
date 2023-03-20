import React from 'react'
import Box from '@mui/material/Box'

type Props = {
  title: React.ReactNode | string
}

function PageTitle({ title }: Props) {
  return (
    <Box>{title}</Box>
  )
}

export default PageTitle
