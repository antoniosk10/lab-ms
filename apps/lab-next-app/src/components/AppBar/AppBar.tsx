import MenuIcon from '@mui/icons-material/Menu'
import { Button, Stack } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import ProfilePopup from '@src/components/AppBar/ProfilePopup'
import Tabs from '@src/components/AppBar/Tabs'
import { ROUTES } from '@src/constants/routes'
import { TABS } from '@src/constants/tabs'
import { ValuesOfObject } from '@src/utils/types'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'

import { userAtom } from '@/src/jotai/atoms'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export type AppBarProps = {
  activeTab: ValuesOfObject<typeof TABS> | false
  showContent ?: boolean
}

function AppBar({ activeTab, showContent }: AppBarProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const [user] = useAtom(userAtom)

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <MuiAppBar position="static" color="default">
        <Grid item={true}>
          <Container maxWidth="xl">
            <Toolbar
              disableGutters={true}
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Link href={ROUTES.HOME}>
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width="90"
                  height="40"
                />
              </Link>
              { showContent !== false && (<Tabs activeTab={activeTab} />)}
              { user && showContent !== false ? (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box mr={1}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={() => {}}
                      color="inherit"
                    >
                      <MenuIcon />
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
              ) : showContent !== false && (
                <Stack direction="row">
                  <Link href={ROUTES.SIGNUP}>
                    <Button>Sign Up </Button>
                  </Link>
                  <Link href={ROUTES.SIGNIN}>
                    <Button>Sign In </Button>
                  </Link>
                </Stack>
              )}
            </Toolbar>
          </Container>
        </Grid>
      </MuiAppBar>
    </>
  )
}

export default AppBar
