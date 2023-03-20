import React from 'react'
import AppBar, { AppBarProps } from '@src/components/AppBar'
import Container from '@mui/material/Container'

type Props = {
  children: React.ReactNode
} & AppBarProps

function LabLayout({ activeTab, children }: Props) {
  return (
    <>
      <AppBar activeTab={activeTab}/>
      <Container maxWidth="xl">
        {children}
      </Container>
    </>
  )
}

export default LabLayout
