import React from 'react'
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import { Control, Controller } from 'react-hook-form'
import { memoizeField } from '../utils/memoize-field'
import FieldWrapper, { FormMethods } from './FieldWrapper'

export type TextFieldProps = {
  name: string
  control?: Control
} & FormMethods & MuiTextFieldProps

function TextField(props: TextFieldProps) {
  const {
    name,
    control,
    formMethods,
    ...rest
  } = props
  
  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
        <MuiTextField
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
