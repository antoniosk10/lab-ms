import * as React from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { Control, Controller } from 'react-hook-form'
import { FormControlLabel } from '@mui/material'

type Props = {
  name: string
  label: React.ReactNode | string
  control: Control
} & SwitchProps

function SwitchField ({ name, label, control }: Props) {
  return (
    <Controller
      name={name}
      control={control}
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
