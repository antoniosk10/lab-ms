import { Typography } from '@mui/material'
import { GridRowsProp } from '@mui/x-data-grid'
import { emptyArray } from '@src/constants/empty'

import CourseTable  from '../CourseTable'

type Props = {
  data: GridRowsProp,
  loading: boolean,
  total: number
}

function WelcomeDetail({ data = emptyArray, loading, total }: Props) {
  return (
    <>
      <Typography fontSize={30} p={3}>
        Course Management
      </Typography>
      <CourseTable rows={data} loading={loading} rowCount={total}/>
    </>
  )
}

export default WelcomeDetail
