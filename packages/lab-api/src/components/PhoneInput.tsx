import React from 'react'
import ReactPhoneInput, { PhoneInputProps } from 'react-phone-input-2'
import { FormHelperText } from '@mui/material'
import { styled } from '@mui/material/styles'

export type ReactPhoneInputProps = {
  value: string
  invalid: boolean
  label?: string
  helperText?: string
} & PhoneInputProps

const ReactPhoneInputStyled = styled(
  ({ className, ...props }: { className?: string } & PhoneInputProps) => (
    <ReactPhoneInput containerClass={className} {...props} />
  ))(({ theme }) => ({
  border: 'none',
  width: '100%',
  '& > .form-control': {
    border: 'none',
    borderBottom: 'rgba(0, 0, 0, 0.6) 1px solid',
    width: '100%',
    fontSize: '16px',
    padding: '8px 0px',
    '&:focus': {
      outline: 'none',
      borderBottomColor: theme.palette.primary.main,
      borderBottomWidth: '2px'
    },
    '&:hover': {
      outline: 'none'
    }
  },
  '& > .special-label': {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '12px'
  },
  '& .form-control.invalid-number': {
    borderBottomColor: theme.palette.error.main,
    borderBottomWidth: '1.5px',
    '&:focus': {
      borderBottomWidth: '2px'
    }
  }
}))

function PhoneInput ({ value, label, invalid, helperText, ...props }: ReactPhoneInputProps) {
  return (
    <>
      <ReactPhoneInputStyled
        inputProps={{
          required: true
        }}
        specialLabel={label}
        masks={{ uz: '(..) ...-..-..' }}
        placeholder="+998 (91) 234-56-78"
        disableDropdown={true}
        value={value}
        isValid={!invalid}
        {...props}
      />
      {invalid && (
        <FormHelperText sx={{ color: 'error.main' }}>{helperText}</FormHelperText>
      )}
    </>
  )
}

export default PhoneInput
