import { Box, Typography } from '@mui/material'

import AuthForm from '../components/AuthForm'

export default function LoginContainer() {
  return (
    <Box p={[2, 5]}>
      <Typography align="center" variant="h1" fontSize={25}>
        Sign In
      </Typography>
      <AuthForm/>
    </Box>
  )
}
