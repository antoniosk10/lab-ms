import { Typography } from '@mui/material'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Table from '@/src/components/Table'
import { useCoursesQuery } from '@/src/schemas/courses/course.generated'

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    renderCell: (params) => (
      <Link
        href={{
          pathname: '/my-labs/[id]',
          query: { id: params.row.id },
        }}
      >
        {params.value}
      </Link>
    ),
  },
  { field: 'description', headerName: 'Description', flex: 1 },
]

function WelcomeDetail() {
  const { data, loading } = useCoursesQuery()
  const router = useRouter()

  const handleAddNewCourse = () => {
    router.push({
      pathname: '/new-lab',
    })
  }

  return (
    <>
      <Typography fontSize={30} p={3}>
        Course Management
      </Typography>
      <Table
        columns={columns}
        loading={loading}
        rows={data?.courses ? (data.courses as GridRowsProp) : []}
        onClick={handleAddNewCourse}
      />
    </>
  )
}

export default WelcomeDetail
