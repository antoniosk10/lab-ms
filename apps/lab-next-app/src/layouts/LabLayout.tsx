import React from 'react'
import AppBar, { AppBarProps } from '@src/components/AppBar'
import Container from '@mui/material/Container'

type Props = {
  children: React.ReactNode
  showContent ?: boolean
} & AppBarProps

function LabLayout ({ activeTab, children, showContent }: Props) {
  return (
    <>
      <AppBar showContent={showContent} activeTab={activeTab} />
      <Container maxWidth="xl">
        {children}
      </Container>
    </>
  )
}

export default LabLayout
