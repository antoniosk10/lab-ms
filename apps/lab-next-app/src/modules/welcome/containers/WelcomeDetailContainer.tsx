import WelcomeDetail from '@modules/welcome/components/WelcomeDetail'
import LabLayout from '@src/layouts/LabLayout'
import React from 'react'

function WelcomeDetailContainer() {
  return <WelcomeDetail />
}

export default WelcomeDetailContainer

WelcomeDetailContainer.getLayout = function getLayout(page: React.ReactNode) {
  return <LabLayout activeTab={false}>{page}</LabLayout>
}
