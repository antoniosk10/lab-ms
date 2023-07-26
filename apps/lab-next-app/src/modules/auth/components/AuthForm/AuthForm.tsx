import { Button, Stack } from '@mui/material'
import TextField from '@packages/lab-fields/src/components/TextField'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { FieldValues, useForm } from 'react-hook-form'
import FormProvider from '@src/components/Form/FormProvider'
import { userAtom } from '@src/jotai/atoms'
import { useLoginMutation } from '@modules/auth/schema/auth.generated'

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
        maxWidth={300}
        alignItems="center"
        alignSelf="center"
      >
        <TextField
          required={true}
          id="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          required={true}
          id="password"
          label="Password"
          name="password"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign in
        </Button>
      </Stack>
    </FormProvider>
  )
}

export default AuthForm
