import { Box, Typography, Stack, Card, CardContent } from '@mui/material'
import React from 'react'
import LabLayout from '@src/layouts/LabLayout'
import { TABS } from '@src/constants/tabs'

import AuthForm from '../components/AuthForm'
import { ROUTES } from '@src/constants/routes'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginContainer() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <Card sx={{ width: 'max-content', margin: '20px auto !important' }}>
        <CardContent>
          <Box p={[2, 5]}>
            <Stack direction="column" alignItems="center">
              <Link href={ROUTES.HOME}>
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width="90"
                  height="40"
                />
              </Link>
              <Typography align="center" variant="h1" fontSize={25} sx={{ marginTop: 4 }}>
                Sign In
              </Typography>
              <AuthForm/>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  )
}

LoginContainer.getLayout = function getLayout(page: React.ReactNode) {
  return <LabLayout showContent={false} activeTab={TABS.COURSE}>{page}</LabLayout>
}
