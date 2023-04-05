import * as React from 'react'
import Select, { SelectProps } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Controller } from 'react-hook-form'

import FieldWrapper, { FormMethods } from './FieldWrapper'

import { memoizeField } from '../utils/memoize-field'

export type OptionType = { value: string | number, name: string | number }

export type SelectFieldProps = {
  name: string
  label: string
  options: OptionType[]
} & FormMethods & SelectProps

function SelectField (props: SelectFieldProps) {
  const {
    name,
    label,
    formMethods,
    options,
    size = 'small',
    ...rest
  } = props

  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
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
    />
  )
}

export default FieldWrapper(memoizeField(SelectField))
