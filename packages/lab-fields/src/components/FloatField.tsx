import * as React from 'react'

import InputFormat, { InputFormatProps } from './InputFormat'
import { Controller, Control } from 'react-hook-form'
import { FormMethods } from './FieldWrapper'

export type FloatFieldProps = {
  name: string
} & FormMethods & Omit<InputFormatProps, 'value' | 'onChange'>

function FloatField({ name, formMethods, ...props }: FloatFieldProps) {
  return (
    <Controller
      name={name}
      control={formMethods.control}
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
