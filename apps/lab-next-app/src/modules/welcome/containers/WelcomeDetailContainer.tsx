import LabLayout from '@src/layouts/LabLayout'
import React from 'react'
import { useCoursesList } from '@modules/mentor/course/services'

import WelcomeDetail from '../components/WelcomeDetail'

function WelcomeDetailContainer() {
  const { data, loading, total } = useCoursesList()
  
  return <WelcomeDetail data={data?.courses} loading={loading} total={total}/>
}

export default WelcomeDetailContainer

WelcomeDetailContainer.getLayout = function getLayout(page: React.ReactNode) {
  return <LabLayout activeTab={false}>{page}</LabLayout>
}
