import * as React from 'react'
import Box, { BoxProps } from '@mui/material/Box'

import TimeField, { TimeFieldProps } from './TimeField'

type Props = {
  fromTimeProps: TimeFieldProps
  toTimeProps: TimeFieldProps
} & BoxProps

function TimeRangeField ({ fromTimeProps, toTimeProps, ...props }: Props) {
  return (
    <Box display="flex" justifyContent="space-between" {...props}>
      <Box width="45%">
        <TimeField label="С" {...fromTimeProps} />
      </Box>
      <Box width="45%">
        <TimeField label="До" {...toTimeProps} />
      </Box>
    </Box>
  )
}

export default TimeRangeField
