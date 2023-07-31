import { FieldValues, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import FormProvider from '@src/components/Form'
import Stack from '@mui/material/Stack'
import { Button, Checkbox, Divider, FormControlLabel, Typography } from '@mui/material'
import TextField from '@packages/lab-fields/src/components/TextField'
import SelectField from '@packages/lab-fields/src/components/SelectField'
import PasswordField from 'lab-fields/src/components/PasswordField'

export interface DefaultValues extends FieldValues {
  firstName: string
  lastName: string
  birthDay: string
  birthMonth: string
  birthYear: string
  gender: string
  password: string
  passwordConfirmation: string
}

const defaultValues: DefaultValues = {
  firstName: '',
  lastName: '',
  birthDay: '',
  birthMonth: '',
  birthYear: '',
  gender: '',
  password: '',
  passwordConfirmation: '',
}

export const monthOptions = [
  { value: 'january', name: 'January' },
  { value: 'february', name: 'February' },
  { value: 'march', name: 'March' },
  { value: 'april', name: 'April' },
  { value: 'may', name: 'May' },
  { value: 'june', name: 'June' },
  { value: 'july', name: 'July' },
  { value: 'august', name: 'August' },
  { value: 'september', name: 'September' },
  { value: 'october', name: 'October' },
  { value: 'november', name: 'November' },
  { value: 'december', name: 'December' },
]

export const genderOptions = [
  { value: 'male', name: 'Male' },
  { value: 'female', name: 'Female' },
  { value: 'other', name: 'Other' },
]

export default function CourseRegistration() {
  const form = useForm({
    defaultValues,
  })
  const [ isPasswordVisible, setPasswordVisibility ] = useState(false)
  const handleSubmit = async () => {
  
  }
  return (
    <>
      <FormProvider {...form} onSubmit={handleSubmit}>
        <Typography variant="body1">Enter your full name</Typography>
        <Divider />
        <Stack sx={{ marginTop: 2 }} direction="row" spacing={3}>
          <TextField
            name="firstName"
            sx={{ width: 368 }}
            label="First name"
            variant="outlined"
            type="text"
          />
          <TextField
            name="lastName"
            sx={{ width: 368 }}
            label="Last name"
            variant="outlined"
            type="text"
          />
        </Stack>
        <Typography sx={{ marginTop: 7 }} variant="body1">Enter your birthday and gender</Typography>
        <Divider />
        <Stack alignItems="center" direction="row" spacing={3} sx={{ marginTop: 2 }}>
          <Stack sx={{ width: '50%' }} direction="row" spacing={2}>
            <TextField
              name="birthDay"
              sx={{ width: 86 }}
              label="Day"
              variant="outlined"
              type="text"
            />
            <Stack sx={{ width: 122 }}>
              <SelectField
                name="birthMonth"
                sx={{ height: 56 }}
                label="Month"
                variant="outlined"
                type="text"
                options={monthOptions}
              />
            </Stack>
            <TextField
              name="birthYear"
              sx={{ width: 122 }}
              label="Year"
              variant="outlined"
              type="text"
            />
          </Stack>
          <SelectField
            name="gender"
            sx={{ height: 56 }}
            label="Gender"
            variant="outlined"
            type="text"
            options={genderOptions}
          />
        </Stack>
        <Typography sx={{ marginTop: 7 }} variant="body1">Enter your birthday and gender</Typography>
        <Divider />
        { !isPasswordVisible ? (
          <Stack alignItems="center" direction="row" spacing={3} sx={{ marginTop: 2 }}>
            <PasswordField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              sx={{ width: 368 }}
            />
            <PasswordField
              name="passwordConfirmation"
              label="Re-enter password"
              variant="outlined"
              type="password"
              sx={{ width: 368 }}
            />
          </Stack>
        ) : (
          <Stack alignItems="center" direction="row" spacing={3} sx={{ marginTop: 2 }}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="text"
              sx={{ width: 368 }}
            />
            <TextField
              name="passwordConfirmation"
              label="Re-enter password"
              variant="outlined"
              type="text"
              sx={{ width: 368 }}
            />
          </Stack>
        )}
        <FormControlLabel
          control={
            <Checkbox onChange={() => { setPasswordVisibility(!isPasswordVisible) }} />
          }
          label="Show password"
        />
        <Stack direction="row" sx={{ marginTop: 3 }} spacing={2}>
          <Button variant="contained" type="submit">Register</Button>
          <Button sx={{ color: 'rgba(0, 0, 0, 0.60)' }} variant="text" color="primary">Cancel</Button>
        </Stack>
      </FormProvider>
    </>
  )
}