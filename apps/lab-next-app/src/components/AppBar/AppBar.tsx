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
import * as ROUTES from '@src/constants/routes'
import { TABS } from '@src/constants/tabs'
import { ValuesOfObject } from '@src/utils/types'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'

import { AuthFormDialog } from '../Dialog/AuthFormDialog/AuthFormDialog'
import { RegistrationFormDialog } from '../Dialog/RegistrationFormDialog/RegistrationFormDialog'

import { userAtom } from '@/src/jotai/atoms'
import { AuthUserData } from '@/src/types'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export type AppBarProps = {
  activeTab: ValuesOfObject<typeof TABS> | false
}

function AppBar({ activeTab }: AppBarProps) {
  const [isAuthDialogOpen, setAuthDialogOpen] = useState(false)
  const [isRegistrationDialogOpen, setRegistrationDialogOpen] = useState(false)

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const [user, setUser] = useAtom(userAtom)

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setAnchorElUser(null)
  }

  const handleAuthDialogClose = () => {
    setAuthDialogOpen(false)
  }

  const handleAuthDialogOpen = () => {
    setAuthDialogOpen(true)
  }

  const handleAuthFormSubmit = ({ email }: AuthUserData) => {
    setUser({ email })
    handleAuthDialogClose()
  }

  const handleRegistrationDialogClose = () => {
    setRegistrationDialogOpen(false)
  }

  const handleRegistrationDialogOpen = () => {
    setRegistrationDialogOpen(true)
  }

  const handleRegistrationFormSubmit = (data: AuthUserData) => {
    handleRegistrationDialogClose()
  }

  return (
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

            <Tabs activeTab={activeTab} />
            {user ? (
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
            ) : (
              <Stack direction="row">
                <Button onClick={handleRegistrationDialogOpen}>Sign Up</Button>
                <Button onClick={handleAuthDialogOpen}>Sign In</Button>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </Grid>

      <AuthFormDialog
        isOpen={isAuthDialogOpen}
        onClose={handleAuthDialogClose}
        onSubmit={handleAuthFormSubmit}
      />
      <RegistrationFormDialog
        isOpen={isRegistrationDialogOpen}
        onClose={handleRegistrationDialogClose}
        onSubmit={handleRegistrationFormSubmit}
      />
    </MuiAppBar>
  )
}

export default AppBar
