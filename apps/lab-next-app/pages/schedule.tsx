import React from 'react'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'

function Schedule () {
  return (
    <>Schedule</>
  )
}

export default Schedule

Schedule.getLayout = function getLayout (page: React.ReactNode) {
  return (
    <LabLayout activeTab={TABS.SCHEDULE}>
      {page}
    </LabLayout>
  )
}
