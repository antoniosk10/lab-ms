import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Typography } from '@mui/material'
import { red as redColor } from '@mui/material/colors'
import TextField from '@packages/lab-fields/src/components/TextField'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Notification } from '../../Notification'
import { SimpleDialog } from '../SimpleDialog/SimpleDialog'

import { AuthUserData } from '@/src/types'

type Props = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: AuthUserData) => void
}

type FormData = {
  email: string
  password: string
  confirmPassword: string
}

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
}

const schema = yup
  .object({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required()

export function RegistrationFormDialog({ isOpen, onClose, onSubmit }: Props) {
  const [isNotificationOpen, setNotificationOpen] = useState(false)

  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit',
  })

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = form

  const handleClose = () => {
    reset(defaultValues)
    onClose()
  }

  const handleOnSubmit = ({ email, password }: FormData) => {
    onSubmit({ email, password })
    setNotificationOpen(true)
  }

  const handleNotificationClose = () => {
    setNotificationOpen(false)
  }

  return (
    <>
      <FormProvider {...form}>
        <SimpleDialog isOpen={isOpen} title="Sign Up" onClose={handleClose}>
          <Box
            component="form"
            onSubmit={handleSubmit(handleOnSubmit)}
            sx={{ mt: 1, p: 2 }}
          >
            <TextField required={true} id="email" label="Email" name="email" />
            <TextField
              required={true}
              id="password"
              label="Password"
              name="password"
              type="password"
            />
            <TextField
              required={true}
              id="confirmPassword"
              label="Confirm password"
              name="confirmPassword"
              type="password"
            />

            {errors.confirmPassword?.message && (
              <Typography color={redColor[600]}>
                {errors.confirmPassword?.message}
              </Typography>
            )}

            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign up
            </Button>
          </Box>
        </SimpleDialog>
      </FormProvider>
      <Notification
        isOpen={isNotificationOpen}
        text="You've been registered. Please Sign In"
        onClose={handleNotificationClose}
      />
    </>
  )
}
