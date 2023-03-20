import React from 'react'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'

type Props = Record<string, unknown>

function Schedule(props: Props) {
  return (
    <>Schedule</>
  )
}

export default Schedule

Schedule.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LabLayout activeTab={TABS.SCHEDULE}>
      {page}
    </LabLayout>
  )
}
