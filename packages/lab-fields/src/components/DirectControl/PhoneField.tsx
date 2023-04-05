import * as React from 'react'
import { Control, Controller } from 'react-hook-form'

import PhoneInput, { ReactPhoneInputProps } from './PhoneInput'

type Props = {
  name?: string
  control: Control
} & Partial<ReactPhoneInputProps>

function PhoneField ({ name = 'phone', control, ...props }: Props) {
  return (
    <Controller
      name={name}
      control={control}
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

export default PhoneField
