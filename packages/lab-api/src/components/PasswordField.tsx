import React from 'react'

import TextField, { TextFieldProps } from '@src/components/Fields/Base/TextField'

type Props = { name?: string } & Omit<TextFieldProps, 'name'>

function PasswordField (props: Props) {
  return (
    <TextField name="password" label="Пароль" type="password" {...props} />
  )
}

export default PasswordField
