import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react'

type Option = {
  name:string,
  action:() => void,
 }

type Props = {
 options:Option[],
 verticalDots?:boolean
}

export default function BasicMenu ({ options, verticalDots = false }:Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOptionClick = (action: Option['action']) => {
    action()
    handleClose()
  }

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {verticalDots ? <MoreVertIcon /> : <MoreHorizIcon />}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => {
          return <MenuItem key={option.name} onClick={() => handleOptionClick(option.action)}>{option.name}</MenuItem>
        })}
      </Menu>
    </>
  )
}
