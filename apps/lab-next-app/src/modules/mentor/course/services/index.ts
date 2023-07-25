import { useCoursesQuery } from '@src/mock-data/grahpql-hooks'
import { paginationAtom } from '@src/jotai/atoms'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'

export const useCoursesList = () => {
  const initialPagination = useAtomValue(paginationAtom)
  const result = useCoursesQuery(initialPagination)
  
  useEffect(() => {
    result.refetch(initialPagination)
  }, [initialPagination])
  
  return result
}