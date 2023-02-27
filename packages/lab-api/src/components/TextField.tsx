import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import { Field, FieldProps } from 'formik'

export type TextFieldProps = {
  name: string
} & MuiTextFieldProps

const TextField = (props: TextFieldProps) => {
  const {
    name,
    size = 'small',
    variant = 'standard',
    ...rest
  } = props

  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <MuiTextField
          name={field.name}
          value={field.value || ''}
          size={size}
          variant={variant}
          onChange={field.onChange}
          fullWidth={true}
          {...rest}
        />
      )}
    </Field>

  )
}

export default TextField
