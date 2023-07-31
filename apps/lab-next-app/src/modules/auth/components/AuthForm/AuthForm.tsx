import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material'
import TextField from '@packages/lab-fields/src/components/TextField'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { FieldValues, useForm } from 'react-hook-form'
import FormProvider from '@src/components/Form/FormProvider'
import { userAtom } from '@src/jotai/atoms'
import { useLoginMutation } from '@modules/auth/schema/auth.generated'
import React, { useState } from 'react'
import Link from 'next/link'
import { PasswordField } from '@packages/lab-fields'

interface DefaultValues extends FieldValues {
  email: string
  password: string
}

const defaultValues: DefaultValues = {
  email: '',
  password: ''
}

function AuthForm() {
  const form = useForm({
    defaultValues
  })
  const [loginMutation] = useLoginMutation()
  const [, setUser] = useAtom(userAtom)
  const router = useRouter()
  
  const {
    formState: { errors }
  } = form
  
  const [ isPasswordFieldVisible, setPasswordFieldVisibility ] = useState(false)
  
  const handleSubmit = async ({ email, password }: DefaultValues) => {
    const response = await loginMutation({
      variables: {
        email,
        password
      }
    })
    
    // TODO: waiting backend
    // if (response.data?.login?.error)
    // throw response.data.login.error
    
    await router.push('/')
    
    setUser(null)
  }
  
  return (
    <FormProvider {...form} onSubmit={handleSubmit}>
      <Stack
        sx={{ m: 'auto', p: 2 }}
        alignItems="center"
        alignSelf="center"
        spacing={2}
      >
        <TextField
          required={true}
          id="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        { !isPasswordFieldVisible ? (
          <PasswordField
            required={true}
            id="password"
            label="Password"
            name="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        ) : (
          <TextField
            required={true}
            id="password"
            label="Password"
            name="password"
            type="text"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
        <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ minWidth: 300 }}>
          <FormControlLabel
            control={
              <Checkbox onChange={() => { setPasswordFieldVisibility(!isPasswordFieldVisible) }} />
            }
            label="Show password"
          />
          <Link href="#">
            <Button size="small" variant="text" sx={{ fontSize: 11 }}>Forgot password?</Button>
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{ paddingTop: 5, width: '100%' }} spacing={3}>
          <Button type="submit" variant="contained">
            Sign in
          </Button>
          <Button sx={{ color: 'rgba(0, 0, 0, 0.60)' }} variant="text">Cancel</Button>
        </Stack>
      </Stack>
    </FormProvider>
  )
}

export default AuthForm
