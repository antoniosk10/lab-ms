import React, { KeyboardEvent } from 'react'
import { TextField } from '@packages/lab-fields'
import Typography from '@mui/material/Typography'

type Props = {
  title: string
  isEdit: boolean
  onTextClick: () => void
  onTitleAccept: () => void
}

function BannerTitle (props: Props) {
  const {
    title = '<COURSE NAME>',
    isEdit,
    onTextClick,
    onTitleAccept
  } = props

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onTitleAccept()
      event.preventDefault()
    }
  }
  return (
    <>
      {isEdit
        ? <TextField autoFocus={true} name="title" onKeyPress={handleEnter} />
        : <Typography onClick={onTextClick}>{title}</Typography>
      }
    </>
  )
}

export default BannerTitle
