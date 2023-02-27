import React from 'react'
import { Field, FieldProps } from 'formik'

import PhoneInput, { ReactPhoneInputProps } from './PhoneInput'

type Props = { name?: string } & Partial<ReactPhoneInputProps>

function PhoneField ({ name = 'phone', ...props }: Props) {
  return (
    <Field name={name}>
      {({ field, meta, form }: FieldProps) => (
        <PhoneInput
          label="Номер телефона"
          value={field.value}
          onChange={value => form.setFieldValue(field.name, value)}
          invalid={Boolean(meta.error)}
          helperText={meta.error}
          {...props}
        />
      )}
    </Field>
  )
}

export default PhoneField
