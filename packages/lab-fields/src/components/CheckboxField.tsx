import React from 'react'
import { Field, FieldProps } from 'formik'
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'

type Props = {
  name: string
  label?: string
} & CheckboxProps

function CheckboxField ({ name, label, ...props }: Props) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <FormControlLabel
          label={label}
          control={(
            <Checkbox
              checked={field.checked}
              onChange={field.onChange}
              {...props}
            />
          )}
        />
      )}
    </Field>
  )
}

export default CheckboxField
