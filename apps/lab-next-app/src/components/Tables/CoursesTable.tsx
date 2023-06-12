import AddIcon from '@mui/icons-material/Add'
import { Button, Pagination, Stack } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridFooter,
  GridPaginationModel,
  GridToolbar,
} from '@mui/x-data-grid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

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

export default function CoursesTable() {
  const router = useRouter()

  const [paginationModel, setPaginationModel] = useState(initialPagination)

  const { data, loading, refetch, total } = useCoursesQuery(initialPagination)

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
    <div>
      <DataGrid
        paginationModel={paginationModel}
        rowCount={total}
        paginationMode="server"
        loading={loading}
        rows={data.courses}
        columns={columns}
        onPaginationModelChange={handlePagination}
        pageSizeOptions={[5, 10]}
        checkboxSelection={true}
        disableRowSelectionOnClick={true}
        slots={{
          toolbar: () => (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              height={70}
              paddingX={3}
            >
              <GridToolbar />
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                onClick={handleAddNewCourse}
              >
                New
              </Button>
            </Stack>
          ),
          footer: () => (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <GridFooter />
              <Pagination
                onChange={(_, page) =>
                  handlePagination({ ...paginationModel, page: page - 1 })
                }
                count={total / paginationModel.pageSize}
                page={paginationModel.page + 1}
              />
            </Stack>
          ),
        }}
      />
    </div>
  )
}
