import { DateField } from '@packages/lab-fields'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Stack } from '@mui/material'
import TextField from '@packages/lab-fields/src/components/TextField'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { FieldValues, useForm } from 'react-hook-form'
import * as yup from 'yup'
import FormProvider from '@src/components/Form/FormProvider'
import { NOTIFICATION } from '@src/constants/notifications'
import { ROLES } from '@src/constants/roles'
import { useRegisterUserMutation } from '@modules/auth/schema/auth.generated'

interface DefaultValues extends FieldValues {
  email: string
  password: string
  confirmPassword: string
  lastName: string
  firstName: string
  dateOfBirth: string
}

const defaultValues: DefaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
  lastName: '',
  firstName: '',
  dateOfBirth: ''
}

const schema = yup
  .object({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match').required(),
    lastName: yup.string().required('Last name is required'),
    firstName: yup.string().required('First name is required'),
    dateOfBirth: yup.string().required('Date is required')
  })

function RegistrationForm() {
  const [registerMutation] = useRegisterUserMutation()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const form = useForm<DefaultValues>({
    defaultValues,
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit'
  })
  
  const {
    formState: { errors }
  } = form
  
  const handleSubmit = async (data: DefaultValues) => {
    const dateOfBirth = new Date(data.dateOfBirth)
    const formattedDateOfBirth = `${dateOfBirth.getDate()}-${
      dateOfBirth.getMonth() + 1
    }-${dateOfBirth.getFullYear()}`
    
    const response = await registerMutation({
      variables: {
        ...data,
        password_confirmation: data.confirmPassword,
        last_name: data.lastName,
        first_name: data.firstName,
        birthday: formattedDateOfBirth,
        role: ROLES.STUDENT
      }
    })
    
    await router.push('/')
    
    enqueueSnackbar(NOTIFICATION.REGISTERED, {
      variant: 'info'
    })
  }
  
  return (
    <FormProvider {...form} onSubmit={handleSubmit}>
      <Stack sx={{ m: 'auto', p: 2 }} maxWidth={300} alignItems="center">
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
          id="firstName"
          label="First name"
          name="firstName"
          error={!!errors.first_name}
          helperText={errors.firstName?.message}
        />
        <TextField
          required={true}
          id="lastName"
          label="Last name"
          name="lastName"
          error={!!errors.last_name}
          helperText={errors.lastName?.message}
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
        <TextField
          required={true}
          id="confirmPassword"
          label="Confirm password"
          name="confirmPassword"
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
        <DateField
          label="birthday"
          name="birthday"
          fieldProps={{
            required: true,
            fullWidth: true,
            error: Boolean(errors.dateOfBirth),
            helperText: errors.dateOfBirth?.message
          }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign up
        </Button>
      </Stack>
    </FormProvider>
  )
}

export default RegistrationForm