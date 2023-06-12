import { Typography } from '@mui/material'

import CoursesTable from '@/src/components/Tables/CoursesTable'

function WelcomeDetail() {
  return (
    <>
      <Typography fontSize={30} p={3}>
        Course Management
      </Typography>
      <CoursesTable />
    </>
  )
}

export default WelcomeDetail
