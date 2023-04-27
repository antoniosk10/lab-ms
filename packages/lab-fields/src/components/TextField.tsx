import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'
import React from 'react'
import { Controller } from 'react-hook-form'

import FieldWrapper, { FormMethods } from './FieldWrapper'

import { memoizeField } from '../utils/memoize-field'

export type TextFieldProps = {
  name: string
} & FormMethods &
  MuiTextFieldProps

function TextField(props: TextFieldProps) {
  const { name, formMethods, ...rest } = props

  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
        <MuiTextField
          margin="normal"
          fullWidth={true}
          name={field.name}
          onChange={field.onChange}
          value={field.value}
          {...rest}
        />
      )}
    />
  )
}

export default FieldWrapper(memoizeField(TextField))
