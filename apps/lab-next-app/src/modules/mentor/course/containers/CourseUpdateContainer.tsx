import { ROLES } from '@src/constants/roles'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'
import { useRouter } from 'next/router'
import React from 'react'
import CourseUpdate from '@modules/mentor/course/components/CourseUpdate'
import { useCourseQuery } from '@modules/mentor/course/schema/course.generated'

function CourseUpdateContainer() {
  const { query } = useRouter()
  const { data, loading } = useCourseQuery({
    variables: { id: query.id as string }
  })
  
  return <CourseUpdate data={data} loading={loading}/>
}

export default CourseUpdateContainer

CourseUpdateContainer.roles = [ROLES.ADMIN, ROLES.MENTOR]

CourseUpdateContainer.getLayout = function getLayout(page: React.ReactNode) {
  return <LabLayout activeTab={TABS.COURSE}>{page}</LabLayout>
}
