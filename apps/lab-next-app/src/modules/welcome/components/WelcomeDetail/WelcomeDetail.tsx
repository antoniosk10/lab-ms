import { Typography } from '@mui/material'
import { GridColDef, GridPaginationModel, GridRowsProp } from '@mui/x-data-grid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Table from '@/src/components/Table'
import { useCoursesQuery } from '@/src/mock-data/grahpql-hooks'

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

const initialPagination = {
  page: 0,
  pageSize: 5,
}

function WelcomeDetail() {
  const [paginationModel, setPaginationModel] = useState(initialPagination)

  const { data, loading, refetch, total } = useCoursesQuery(initialPagination)

  const router = useRouter()

  const handleAddNewCourse = () => {
    router.push({
      pathname: '/new-lab',
    })
  }

  const handlePagination = (model: GridPaginationModel) => {
    refetch(model)
    setPaginationModel(model)
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
        onPagination={handlePagination}
        rowsCount={total}
        paginationModel={paginationModel}
      />
    </>
  )
}

export default WelcomeDetail
