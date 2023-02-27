import React from 'react'
import { DesktopDatePicker, DesktopDatePickerProps, MobileDatePicker } from '@mui/x-date-pickers'
import { Field, FieldProps } from 'formik'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import { isMobile } from '@src/utils/isMobile'

export type DateFieldProps = {
  name: string
  fieldProps?: TextFieldProps
} & Partial<DesktopDatePickerProps<Date, Date>>

function DateField ({ name, fieldProps, inputFormat = 'dd.MM.yyyy', ...props }: DateFieldProps) {
  const DatePicker = isMobile ? MobileDatePicker : DesktopDatePicker

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <DatePicker
          value={field.value}
          onChange={newValue => form.setFieldValue(field.name, newValue)}
          inputFormat={inputFormat}
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

export default DateField
