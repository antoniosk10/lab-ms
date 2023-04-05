import * as React from 'react'
import { DesktopTimePicker, DesktopTimePickerProps, MobileTimePicker } from '@mui/x-date-pickers'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { Control, Controller } from 'react-hook-form'

import { isMobile } from '../../utils/is-mobile'

export type TimeFieldProps = {
  name: string
  control: Control
  fieldProps?: TextFieldProps
} & Partial<DesktopTimePickerProps<Date, Date>>

function TimeField ({ name, fieldProps, control, ...props }: TimeFieldProps) {
  const TimePicker = isMobile ? MobileTimePicker : DesktopTimePicker

  return (
    <Controller
      name={name}
      control={control}
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
