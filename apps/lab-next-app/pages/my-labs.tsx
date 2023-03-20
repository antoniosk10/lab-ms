import React from 'react'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'
import { ROLES } from '@src/constants/roles'

type Props = Record<string, unknown>

function MyLabs(props: Props) {
  return (
    <>My labs</>
  )
}

export default MyLabs

MyLabs.roles = [ROLES.ADMIN, ROLES.MENTOR]

MyLabs.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LabLayout activeTab={TABS.MY_LABS}>
      {page}
    </LabLayout>
  )
}