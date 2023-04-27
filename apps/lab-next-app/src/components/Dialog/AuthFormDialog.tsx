import TextField from '@/../../packages/lab-fields/src/components/TextField'
import { Box, Button } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'

import { SimpleDialog } from './SimpleDialog'

type Props = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: Record<string, string>) => void
}

const defaultValues = {
  email: '',
  password: '',
}

export function AuthFormDialog({ isOpen, onClose, onSubmit }: Props) {
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
      <SimpleDialog isOpen={isOpen} title="Sign In" onClose={handleClose}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, p: 2 }}
        >
          <TextField required={true} id="email" label="Email" name="email" />
          <TextField
            required={true}
            id="password"
            label="Password"
            name="password"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign in
          </Button>
        </Box>
      </SimpleDialog>
    </FormProvider>
  )
}
