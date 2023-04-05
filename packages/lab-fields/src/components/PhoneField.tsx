import * as React from 'react'
import { Controller } from 'react-hook-form'

import PhoneInput, { ReactPhoneInputProps } from './PhoneInput'
import FieldWrapper, { FormMethods } from './FieldWrapper'

import { memoizeField } from '../utils/memoize-field'

type Props = {
  name?: string
} & FormMethods & Partial<ReactPhoneInputProps>

function PhoneField ({ name = 'phone', formMethods, ...props }: Props) {
  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field, fieldState }) => (
        <PhoneInput
          label="Номер телефона"
          value={field.value}
          onChange={field.onChange}
          invalid={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          {...props}
        />
      )}
    />
  )
}

export default FieldWrapper(memoizeField(PhoneField))
