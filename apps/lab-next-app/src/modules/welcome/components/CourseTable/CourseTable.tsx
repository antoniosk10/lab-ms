import { GridColDef, GridPaginationModel, GridRowsProp } from '@mui/x-data-grid'
import Link from 'next/link'
import { DataGrid } from '@packages/lab-table'
import { useRouter } from 'next/router'
import { ROUTES } from '@src/constants/routes'
import { paginationAtom } from '@src/jotai/atoms'
import { useSetAtom } from 'jotai'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'

type Props = {
  rows: GridRowsProp,
  loading: boolean,
  rowCount: number
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    renderCell: (params) => (
      <Link
        href={{
          pathname: ROUTES.COURSE,
          query: { id: params.row.id }
        }}
      >
        {params.value}
      </Link>
    )
  },
  { field: 'description', headerName: 'Description', flex: 1 }
]

function CourseTable({ rows, loading, rowCount }: Props) {
  const router = useRouter()
  const setPagination= useSetAtom(paginationAtom)
  
  const handleAddNewCourse = () => {
    router.push({
      pathname: ROUTES.NEW_COURSE
    })
  }
  
  const handlePagination = (model: GridPaginationModel) => {
    setPagination(model)
  }
  
  return (
    <>
      <DataGrid
        columns={columns}
        loading={loading}
        rows={rows}
        toolbarComponent={(
          <Button
            startIcon={<AddIcon/>}
            variant="contained"
            onClick={handleAddNewCourse}
          > New
          </Button>)
        }
        rowCount={rowCount}
        onPaginationEvent={handlePagination}
      />
    </>
  )
}

export default CourseTable