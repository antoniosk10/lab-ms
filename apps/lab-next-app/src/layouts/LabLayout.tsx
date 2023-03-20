import React from 'react'
import AppBar from '@src/components/AppBar'

type Props = {
  children: React.ReactNode
}

function LabLayout({ children }: Props) {
  return (
    <>
      <AppBar activeTab={null}/>
      {children}
    </>
  )
}

export default LabLayout
