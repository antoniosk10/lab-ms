import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import { Control, Controller } from 'react-hook-form'

export type TextFieldProps = {
  name: string
  control: Control
} & MuiTextFieldProps

function TextField(props: TextFieldProps) {
  const {
    name,
    control,
    ...rest
  } = props
  
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MuiTextField
          name={field.name}
          onChange={field.onChange}
          {...rest}
        />
      )}
    />
  )
}

export default TextField
