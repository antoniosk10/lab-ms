import React from 'react'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import TextField, { TextFieldProps } from '@mui/material/TextField'

export type InputFormatProps = {
  value: string | number
  onChange: React.ChangeEventHandler
} & Omit<NumericFormatProps, 'customInput'> & TextFieldProps

function InputFormat ({ value, onChange, ...props }: InputFormatProps) {
  return (
    <NumericFormat
      value={value || ''}
      onChange={onChange}
      thousandSeparator={true}
      decimalScale={3}
      allowNegative={true}
      allowLeadingZeros={true}
      variant="standard"
      customInput={TextField}
      {...props}
    />
  )
}

export default InputFormat
