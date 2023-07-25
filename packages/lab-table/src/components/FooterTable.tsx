import { Pagination, Stack } from '@mui/material'
import { GridFooter, GridPaginationModel } from '@mui/x-data-grid'

type Props = {
  handlePagination: (model: GridPaginationModel) => void,
  rowCount: number,
  paginationModel: GridPaginationModel
};

export function FooterTable({ handlePagination, rowCount, paginationModel }: Props) {
  return <Stack
    direction='row'
    justifyContent='space-between'
    alignItems='center'
  >
    <GridFooter />
    <Pagination
      onChange={(_, page) =>
        handlePagination({ ...paginationModel, page: page - 1 })
      }
      count={rowCount / paginationModel.pageSize}
      page={paginationModel.page + 1}
    />
  </Stack>
}