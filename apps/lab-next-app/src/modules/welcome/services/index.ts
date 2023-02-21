import { GET_DOGS } from '../queries'
import { useQuery } from '@apollo/client'

export const useDogList = () => {
  return useQuery(GET_DOGS)
}