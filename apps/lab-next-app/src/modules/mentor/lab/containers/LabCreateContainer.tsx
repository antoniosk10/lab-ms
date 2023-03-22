import React from 'react'
import { containers } from '@pages/mentor/lab'
import { ROLES } from '@src/constants/roles'
import LabLayout from '@src/layouts/LabLayout'
import { TABS } from '@src/constants/tabs'
import LabCreate from '@pages/mentor/lab/components/LabCreate'

type Props = Record<string, unknown>

function LabCreateContainer(props: Props) {
  return (
    <LabCreate />
  )
}
export default LabCreateContainer

LabCreateContainer.roles = [ROLES.ADMIN, ROLES.MENTOR]

LabCreateContainer.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LabLayout activeTab={TABS.MY_LABS}>
      {page}
    </LabLayout>
  )
}