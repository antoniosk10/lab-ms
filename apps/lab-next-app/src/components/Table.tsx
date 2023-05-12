import AddIcon from '@mui/icons-material/Add'
import { Button, Stack } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from '@mui/x-data-grid'

type Props = {
  rows: GridRowsProp
  loading: boolean
  columns: GridColDef[]
  onClick: () => void
}

export default function Table({
  rows,
  loading = false,
  columns,
  onClick,
}: Props) {
  return (
    <div>
      <DataGrid
        loading={loading}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
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
        }}
      />
    </div>
  )
}
