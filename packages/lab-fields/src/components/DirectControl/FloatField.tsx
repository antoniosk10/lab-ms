import * as React from 'react'
import { Control, Controller } from 'react-hook-form'

import InputFormat, { InputFormatProps } from './InputFormat'

export type FloatFieldProps = {
  name: string
  control: Control
} & Omit<InputFormatProps, 'value' | 'onChange'>

function FloatField ({ name, control, ...props }: FloatFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputFormat
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          {...props}
        />
      )}
    />
  )
}

export default FloatField
