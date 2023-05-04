import { Dialog, DialogTitle } from '@mui/material'
import { PropsWithChildren } from 'react'

type Props = {
  title: string
  isOpen: boolean
  onClose: () => void
}

export function SimpleDialog({
  children,
  title,
  isOpen,
  onClose,
}: PropsWithChildren<Props>) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle align="center">{title}</DialogTitle>
      {children}
    </Dialog>
  )
}
