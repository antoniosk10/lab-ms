import * as React from 'react'
import { Controller } from 'react-hook-form'

import InputFormat, { InputFormatProps } from './InputFormat'
import FieldWrapper, { FormMethods } from './FieldWrapper'

import { memoizeField } from '../utils/memoize-field'

export type PositiveFloatFieldProps = {
  name: string
} & FormMethods & Omit<InputFormatProps, 'value' | 'onChange'>

function FloatField ({ name, formMethods, ...props }: PositiveFloatFieldProps) {
  return (
    <Controller
      name={name}
      control={formMethods.control}
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

export default FieldWrapper(memoizeField(FloatField))
