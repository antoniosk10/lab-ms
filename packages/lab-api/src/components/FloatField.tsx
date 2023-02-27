import React from 'react'
import { Field, FieldProps } from 'formik'

import InputFormat, { InputFormatProps } from '@src/components/Fields/Base/InputFormat'

export type FloatFieldProps = {
  name: string
} & Omit<InputFormatProps, 'value' | 'onChange'>

function FloatField ({ name, ...props }: FloatFieldProps) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <InputFormat
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          {...props}
        />
      )}
    </Field>
  )
}

export default FloatField
