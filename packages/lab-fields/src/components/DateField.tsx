import TextField, { TextFieldProps } from '@mui/material/TextField'
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
  LocalizationProvider,
  MobileDatePicker,
} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import * as React from 'react'
import { Controller } from 'react-hook-form'

import FieldWrapper, { FormMethods } from './FieldWrapper'

import { isMobile } from '../utils/is-mobile'

export type DateFieldProps = {
  name: string
  fieldProps?: TextFieldProps
} & FormMethods &
  Partial<DesktopDatePickerProps<Date, Date>>

function DateField({
  name,
  fieldProps,
  inputFormat = 'DD.MM.YYYY',
  formMethods,
  ...props
}: DateFieldProps) {
  const DatePicker = isMobile ? MobileDatePicker : DesktopDatePicker

  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        </LocalizationProvider>
      )}
    />
  )
}

export default FieldWrapper(DateField)
