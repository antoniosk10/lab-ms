import Course from '@modules/mentor/course/components'
import { ROLES } from '@src/constants/roles'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'
import React from 'react'

import { emptyArray } from '@/src/constants/empty'

function CourseCreateContainer() {
  return <Course modules={emptyArray} courseName="New Lab"/>
}

export default CourseCreateContainer

CourseCreateContainer.roles = [ROLES.ADMIN, ROLES.MENTOR]

CourseCreateContainer.getLayout = function getLayout(page: React.ReactNode) {
  return <LabLayout activeTab={TABS.COURSE}>{page}</LabLayout>
}
