import { atom } from 'jotai'
import { User } from '@gql-gen/graphql'
import { GridPaginationModel } from '@mui/x-data-grid'

export const userAtom = atom<User | null>(null)

export const paginationAtom = atom<GridPaginationModel>({
  page: 0,
  pageSize: 5
})