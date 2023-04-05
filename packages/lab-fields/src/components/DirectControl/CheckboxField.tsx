import React from 'react'
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

type Props = {
  name: string
  label?: string
  control: Control
} & CheckboxProps

function CheckboxField ({ name, label, control, ...props }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          label={label}
          control={(
            <Checkbox
              checked={Boolean(field.value)}
              onChange={field.onChange}
              {...props}
            />
          )}
        />
      )}
    />
  )
}

export default CheckboxField
