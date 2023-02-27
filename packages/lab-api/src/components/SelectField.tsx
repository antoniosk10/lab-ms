import React from 'react'
import Select, { SelectProps } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Field, FieldProps } from 'formik'

export type OptionType = { value: string | number, name: string | number }

export type SelectFieldProps = {
  name: string
  label: string
  options: OptionType[]
} & SelectProps

function SelectField (props: SelectFieldProps) {
  const {
    name,
    label,
    options,
    size = 'small',
    ...rest
  } = props

  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <FormControl fullWidth={true} size={size}>
          <InputLabel>{label}</InputLabel>
          <Select
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            variant="standard"
            sx={{ textAlign: 'left' }}
            {...rest}
          >
            {options.map(({ value, name }) => (
              <MenuItem key={value} value={value}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Field>
  )
}

export default SelectField
