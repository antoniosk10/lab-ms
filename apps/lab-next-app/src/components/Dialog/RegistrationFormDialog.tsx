import TextField from '@/../../packages/lab-fields/src/components/TextField'
import { Box, Button } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'

import { SimpleDialog } from './SimpleDialog'

type Props = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: Record<string, string>) => void
}

export function RegistrationFormDialog({ isOpen, onClose, onSubmit }: Props) {
  const defaultValues = {
    email: '',
    password: '',
  }
  const form = useForm({
    defaultValues,
  })

  const { handleSubmit, reset } = form

  const handleClose = () => {
    reset(defaultValues)
    onClose()
  }

  return (
    <FormProvider {...form}>
      <SimpleDialog isOpen={isOpen} title="Sign Up" onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, p: 2 }}
        >
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="email"
            label="Email"
            name="email"
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="password"
            label="Password"
            name="password"
          />
          <TextField
            margin="normal"
            required={true}
            fullWidth={true}
            id="confirmPassword"
            label="Confirm password"
            name="confirmPassword"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign up
          </Button>
        </Box>
      </SimpleDialog>
    </FormProvider>
  )
}
