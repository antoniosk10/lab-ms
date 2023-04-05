import * as React from 'react'
import { DesktopDatePicker, DesktopDatePickerProps, MobileDatePicker } from '@mui/x-date-pickers'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

import { FormMethods } from './FieldWrapper'

import { isMobile } from '../utils/is-mobile'

export type DateFieldProps = {
  name: string
  fieldProps?: TextFieldProps
} & FormMethods & Partial<DesktopDatePickerProps<Date, Date>>

function DateField ({ name, fieldProps, inputFormat = 'dd.MM.yyyy', formMethods, ...props }: DateFieldProps) {
  const DatePicker = isMobile ? MobileDatePicker : DesktopDatePicker

  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
        <DatePicker
          value={field.value}
          onChange={field.onChange}
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
    />
  )
}

export default DateField
