import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import React from 'react'

type Props = {
  anchorElUser: null | HTMLElement
  settings: string[]
  onMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
  onMenuClose: () => void
}

function ProfilePopup ({ settings, anchorElUser, onMenuOpen, onMenuClose }: Props) {
  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={onMenuOpen} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/1.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted={true}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={onMenuClose}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={onMenuClose}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>

  )
}

export default ProfilePopup
