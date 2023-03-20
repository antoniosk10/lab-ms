import React from 'react'
import AppBar from '@src/components/AppBar'
import { TABS } from '@src/constants/tabs'

type Props = Record<string, unknown>

function MyLabs(props: Props) {
  return (
    <>My labs</>
  )
}

export default MyLabs

MyLabs.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <AppBar activeTab={TABS.MY_LABS}/>
      {page}
    </>
  )
}