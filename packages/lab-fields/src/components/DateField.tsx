import * as React from 'react'
import { DesktopDatePicker, DesktopDatePickerProps, MobileDatePicker } from '@mui/x-date-pickers'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import { isMobile } from '../utils/is-mobile'
import { Control, Controller } from 'react-hook-form'

export type DateFieldProps = {
  name: string
  fieldProps?: TextFieldProps
  control: Control
} & Partial<DesktopDatePickerProps<Date, Date>>

function DateField ({ name, fieldProps, inputFormat = 'dd.MM.yyyy', control, ...props }: DateFieldProps) {
  const DatePicker = isMobile ? MobileDatePicker : DesktopDatePicker

  return (
    <Controller
      name={name}
      control={control}
      render={({ field}) => (
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
