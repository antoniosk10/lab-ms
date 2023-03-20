import * as React from 'react'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import ProfilePopup from '@src/components/AppBar/ProfilePopup'
import Image from 'next/image'
import Link from 'next/link'
import Tabs from '@src/components/AppBar/Tabs'
import { TABS } from '@src/constants/tabs'
import { ValuesOfObject } from '@src/utils/types'
import * as ROUTES from '@src/constants/routes'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export type AppBarProps = {
  activeTab: ValuesOfObject<typeof TABS> | null
}

function AppBar({ activeTab }: AppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  
  const handleUserMenuClose = () => {
    setAnchorElUser(null)
  }
  
  
  return (
    <MuiAppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters={true} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href={ROUTES.HOME}>
            <Image src="/images/logo/logo.png" alt="logo" width="90" height="40"/>
          </Link>
          
          <Tabs activeTab={activeTab}/>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box mr={1}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon/>
              </IconButton>
            </Box>
            
            <Box sx={{ flexGrow: 0 }}>
              <ProfilePopup
                settings={settings}
                anchorElUser={anchorElUser}
                onMenuOpen={handleUserMenuOpen}
                onMenuClose={handleUserMenuClose}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
}

export default AppBar