import * as React from 'react'
import { Control, Controller } from 'react-hook-form'

import InputFormat, { InputFormatProps } from './InputFormat'

export type PositiveFloatFieldProps = {
  name: string
  control: Control
} & Omit<InputFormatProps, 'value' | 'onChange'>

function FloatField ({ name, control, ...props }: PositiveFloatFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputFormat
          name={field.name}
          value={field.value}
          allowNegative={false}
          onChange={field.onChange}
          {...props}
        />
      )}
    />
  )
}

export default FloatField
