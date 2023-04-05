import React from 'react'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'

function People () {
  return (
    <>People</>
  )
}

export default People

People.getLayout = function getLayout (page: React.ReactNode) {
  return (
    <LabLayout activeTab={TABS.PEOPLE}>
      {page}
    </LabLayout>
  )
}
