import React from 'react'
import AppBar from '@src/components/AppBar'
import { TABS } from '@src/constants/tabs'

type Props = Record<string, unknown>

function Schedule(props: Props) {
  return (
    <>Schedule</>
  )
}

export default Schedule

Schedule.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <AppBar activeTab={TABS.SCHEDULE}/>
      {page}
    </>
  )
}
