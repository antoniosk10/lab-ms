import { DataGrid as MuiDataGrid, GridColDef, GridPaginationModel, GridRowsProp } from '@mui/x-data-grid'
import { ReactElement, useState } from 'react'

import { FooterTable } from './components/FooterTable'
import { ToolbarTable } from './components/ToolbarTable'

type Pagination = {
  page: number,
  pageSize: number
}

type Props = {
  rows: GridRowsProp
  loading: boolean
  columns: GridColDef[]
  initialPagination?: Pagination,
  pageSizeOptions?: number[],
  rowCount: number,
  toolbarComponent: ReactElement,
  onPaginationEvent: (model: GridPaginationModel) => void
}

const defaultPagination: GridPaginationModel = {
  page: 0,
  pageSize: 5
}

const defaultPageSizes: number[] = [5, 10, 15, 20]

export function DataGrid({
                           rows,
                           loading = false,
                           columns,
                           toolbarComponent,
                           initialPagination = defaultPagination,
                           pageSizeOptions = defaultPageSizes,
                           rowCount,
                           onPaginationEvent
                         }: Props) {
  const [paginationModel, setPaginationModel] = useState(initialPagination)
  
  const handlePagination = (model: GridPaginationModel) => {
    onPaginationEvent(model)
    setPaginationModel(model)
  }
  
  return (
    <div>
      <MuiDataGrid
        paginationModel={paginationModel}
        rowCount={rowCount}
        paginationMode="server"
        loading={loading}
        rows={rows}
        onPaginationModelChange={handlePagination}
        columns={columns}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={true}
        disableRowSelectionOnClick={true}
        slots={{
          toolbar: () => <ToolbarTable toolbarComponent={toolbarComponent}/>,
          footer: () => <FooterTable handlePagination={handlePagination} rowCount={rowCount}
                                     paginationModel={paginationModel}/>
        }}
      />
    </div>
  )
}
