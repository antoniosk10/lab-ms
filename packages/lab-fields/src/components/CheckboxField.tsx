import React from 'react'
import { Controller } from 'react-hook-form'
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'

import FieldWrapper, { FormMethods } from './FieldWrapper'

import { memoizeField } from '../utils/memoize-field'

type Props = {
  name: string
  label?: string
} & FormMethods & CheckboxProps

function CheckboxField ({ name, label, formMethods, ...props }: Props) {
  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
        <FormControlLabel
          label={label}
          control={(
            <Checkbox
              checked={Boolean(field.value)}
              onChange={field.onChange}
              {...props}
            />
          )}
        />
      )}
    />
  )
}

export default FieldWrapper(memoizeField(CheckboxField))
