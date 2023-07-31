import { ROUTES } from '@src/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { Button, Stack } from '@mui/material'


export default function CourseRegistrationSuccess() {
  return (
    <>
      <Stack
        direction="column"
        spacing={5}
        justifyContent="center"
        alignItems="center"
      >
        <Link href={ROUTES.HOME}>
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width="90"
            height="40"
          />
        </Link>
        <Stack direction="column" alignItems="center">
          <h1>Great!</h1>
          <p>Now, let’s wait a bit while your request is being approved.</p>
        </Stack>
        <Image src="/images/send-love.svg" alt="send-love" width="200" height="110" />
        <Link href={ROUTES.HOME}>
          <Button variant="contained">OKAY!</Button>
        </Link>
      </Stack>
    </>
  )
}