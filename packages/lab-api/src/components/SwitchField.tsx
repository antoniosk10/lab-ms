import React from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { Field, FieldProps } from 'formik'
import { FormControlLabel } from '@mui/material'

type Props = {
  name: string
  label: React.ReactNode | string
} & SwitchProps

function SwitchField ({ name, label }: Props) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <FormControlLabel
          label={label}
          control={(
            <Switch checked={field.checked} onChange={field.onChange} />
          )}
        />
      )}
    </Field>
  )
}

export default SwitchField
