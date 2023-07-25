import MenuIcon from '@mui/icons-material/Menu'
import { Box, Stack, Typography } from '@mui/material'
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'

import BasicMenu from '@/src/components/ItemWithMenu/BasicMenu'
import { MenuOption } from '@/src/types'

type Props = {
  verticalDots?: boolean
  options: MenuOption[]
  title: string
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined
}

function ItemWithMenu({
  verticalDots,
  options,
  title,
  dragHandleProps,
}: Props) {
  return (
    <Stack
      sx={{ width: '100%' }}
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box {...dragHandleProps}>
        <MenuIcon />
      </Box>

      <Typography>{title}</Typography>
      <BasicMenu options={options} verticalDots={verticalDots} />
    </Stack>
  )
}
export default ItemWithMenu
