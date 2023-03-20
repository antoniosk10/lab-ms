import React from 'react'
import AppBar from '@src/components/AppBar'
import { TABS } from '@src/constants/tabs'

type Props = Record<string, unknown>

function People(props: Props) {
  return (
    <>People</>
  )
}

export default People

People.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <AppBar activeTab={TABS.PEOPLE}/>
      {page}
    </>
  )
}