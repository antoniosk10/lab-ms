import React from 'react'
import { Box, Typography } from '@mui/material'

import RegistrationForm from '../components/RegistrationForm'

type Props = Record<string, unknown>

function RegistrationContainer(props: Props) {
  return (
    <Box p={[2, 5]}>
      <Typography align="center" variant="h1" fontSize={25}>
        Sign Up
      </Typography>
      <RegistrationForm/>
    </Box>
  )
}

export default RegistrationContainer