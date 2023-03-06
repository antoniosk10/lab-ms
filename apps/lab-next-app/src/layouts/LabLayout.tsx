import React from 'react'
import AppBar from '@src/components/AppBar'

type Props = {
  children: React.ReactNode
}

function LabLayout({ children }: Props) {
  return (
    <>
      <AppBar/>
      {children}
    </>
  )
}

export default LabLayout
