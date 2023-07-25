import { Stack } from '@mui/material'
import { GridToolbar } from '@mui/x-data-grid'
import { ReactElement } from 'react'

type Props = {
  toolbarComponent: ReactElement
};

export function ToolbarTable({ toolbarComponent }: Props) {
  return <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    height={70}
    paddingX={3}
  >
    <GridToolbar/>
    {toolbarComponent}
  </Stack>
}