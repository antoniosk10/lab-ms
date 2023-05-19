import AddIcon from '@mui/icons-material/Add'
import { Button, Pagination, Stack } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridFooter,
  GridPaginationModel,
  GridRowsProp,
  GridToolbar,
} from '@mui/x-data-grid'

type Props = {
  rows: GridRowsProp
  loading: boolean
  columns: GridColDef[]
  onClick: () => void
  onPagination: (model: GridPaginationModel) => void
  rowsCount: number
  paginationModel: GridPaginationModel
}

export default function Table({
  rows,
  loading = false,
  columns,
  onClick,
  onPagination,
  rowsCount,
  paginationModel,
}: Props) {
  return (
    <div>
      <DataGrid
        paginationModel={paginationModel}
        rowCount={rowsCount}
        paginationMode="server"
        loading={loading}
        rows={rows}
        columns={columns}
        onPaginationModelChange={onPagination}
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
                onClick={onClick}
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
                  onPagination({ ...paginationModel, page: page - 1 })
                }
                count={rowsCount / paginationModel.pageSize}
                page={paginationModel.page + 1}
              />
            </Stack>
          ),
        }}
      />
    </div>
  )
}
