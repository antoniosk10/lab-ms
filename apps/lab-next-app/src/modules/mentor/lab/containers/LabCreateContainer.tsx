import LabCreate from '@modules/mentor/lab/components/LabCreate'
import { ROLES } from '@src/constants/roles'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'
import { useRouter } from 'next/router'
import React from 'react'

import LabUpdate from '../components/LabCreate/LabUpdate'

import { emptyArray } from '@/src/constants/empty'

function LabCreateContainer() {
  const { pathname } = useRouter()
  const isNewLab = pathname === '/new-lab'

  return isNewLab ? (
    <LabCreate modules={emptyArray} courseName="New Lab" />
  ) : (
    <LabUpdate />
  )
}

export default LabCreateContainer

LabCreateContainer.roles = [ROLES.ADMIN, ROLES.MENTOR]

LabCreateContainer.getLayout = function getLayout(page: React.ReactNode) {
  return <LabLayout activeTab={TABS.MY_LABS}>{page}</LabLayout>
}
