import React from 'react'
import { DesktopTimePicker, DesktopTimePickerProps, MobileTimePicker } from '@mui/x-date-pickers'
import { Field, FieldProps } from 'formik'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import { isMobile } from '@src/utils/isMobile'

export type TimeFieldProps = {
  name: string
  fieldProps?: TextFieldProps
} & Partial<DesktopTimePickerProps<Date, Date>>

function TimeField ({ name, fieldProps, ...props }: TimeFieldProps) {
  const TimePicker = isMobile ? MobileTimePicker : DesktopTimePicker

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <TimePicker
          value={field.value}
          ampm={false}
          onChange={newValue => form.setFieldValue(field.name, newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              size="small"
              variant="standard"
              {...fieldProps}
            />
          )}
          {...props}
        />
      )}
    </Field>
  )
}

export default TimeField
