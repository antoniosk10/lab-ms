import * as React from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { Controller } from 'react-hook-form'
import { FormControlLabel } from '@mui/material'

import { FormMethods } from './FieldWrapper'

type Props = {
  name: string
  label: React.ReactNode | string
} & FormMethods & SwitchProps

function SwitchField ({ name, label, formMethods }: Props) {
  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
        <FormControlLabel
          label={label}
          control={(
            <Switch checked={field.value} onChange={field.onChange} />
          )}
        />
      )}
    />
  )
}

export default SwitchField
