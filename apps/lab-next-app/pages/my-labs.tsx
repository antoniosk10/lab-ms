import React from 'react'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'

type Props = Record<string, unknown>

function MyLabs(props: Props) {
  return (
    <>My labs</>
  )
}

export default MyLabs

MyLabs.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LabLayout activeTab={TABS.MY_LABS}>
      {page}
    </LabLayout>
  )
}