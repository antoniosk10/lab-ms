import React from 'react'
import { Field, FieldProps } from 'formik'

import InputFormat, { InputFormatProps } from '@src/components/Fields/Base/InputFormat'

export type PositiveFloatFieldProps = {
  name: string
} & Omit<InputFormatProps, 'value' | 'onChange'>

function FloatField ({ name, ...props }: PositiveFloatFieldProps) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <InputFormat
          name={field.name}
          value={field.value}
          allowNegative={false}
          onChange={field.onChange}
          {...props}
        />
      )}
    </Field>
  )
}

export default FloatField
