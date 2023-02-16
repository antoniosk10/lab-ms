import { GET_LOCATIONS } from '../queries'
import { useQuery } from '@apollo/client'

export const useTest = () => {
  return useQuery(GET_LOCATIONS, {
    variables: {

    }
  })
}