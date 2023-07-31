import * as React from 'react'

import TextField, { TextFieldProps } from './TextField'

type Props = { name?: string } & Omit<TextFieldProps, 'name' | 'formMethods'>

function PasswordField (props: Props) {
  return (
      <TextField
      name="password"
      label="Пароль"
      type="password"
      {...props}
    />
  )
}

export default PasswordField
