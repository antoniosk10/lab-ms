import { SvgIconComponent } from '@mui/icons-material'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { useMemo } from 'react'

import { theme } from '@/src/theme'

type Props = {
  title: string | null
  Icon: SvgIconComponent
}

function AssetsItem({ title, Icon }: Props) {
  const style = useMemo(
    () => ({
      backgroundColor: theme.palette.grey[100],
      border: '1px solid',
      borderColor: theme.palette.grey[300],
      borderRadius: '10px',
    }),
    []
  )
  return (
    <Stack sx={style} direction="row">
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <Icon fontSize="large" />
      </Box>
      <Divider flexItem={true} orientation="vertical" />
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <Typography>{title}</Typography>
      </Box>
    </Stack>
  )
}

export default AssetsItem
