import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import * as React from 'react'

import { MenuOption } from '@/src/types'

type Props = {
  title: string
  options: MenuOption[]
  onClick: () => void
}

export default function SplitButton({ title, options, onClick }: Props) {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)

  const handleClick = () => {
    onClick()
  }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    options[index].action()
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={handleClick}>{title}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition={true}
        disablePortal={true}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement !== 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem={true}>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.name}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}
