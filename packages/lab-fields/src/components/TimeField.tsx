import * as React from 'react'
import { DesktopTimePicker, DesktopTimePickerProps, MobileTimePicker } from '@mui/x-date-pickers'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

import { FormMethods } from './FieldWrapper'

import { isMobile } from '../utils/is-mobile'

export type TimeFieldProps = {
  name: string
  fieldProps?: TextFieldProps
} & FormMethods & Partial<DesktopTimePickerProps<Date, Date>>

function TimeField ({ name, fieldProps, formMethods, ...props }: TimeFieldProps) {
  const TimePicker = isMobile ? MobileTimePicker : DesktopTimePicker

  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
        <TimePicker
          value={field.value}
          ampm={false}
          onChange={field.onChange}
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

export default TimeField
