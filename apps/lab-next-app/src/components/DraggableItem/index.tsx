import MenuIcon from '@mui/icons-material/Menu'
import { Stack, Typography } from '@mui/material'

import BasicMenu from '@/src/components/DraggableItem/components/BasicMenu'
import { MenuOption } from '@/src/types'

type Props = {
  verticalDots?: boolean
  options: MenuOption[]
  title: string
}

function DraggableItem({ verticalDots, options, title }: Props) {
  return (
    <Stack
      sx={{ width: '100%' }}
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <MenuIcon />
      <Typography>{title}</Typography>
      <BasicMenu options={options} verticalDots={verticalDots} />
    </Stack>
  )
}

export default DraggableItem
