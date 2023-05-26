import { useState } from 'react'

const courses = [
  {
    id: '1',
    name: 'name1',
    description: 'description',
  },
  {
    id: '2',
    name: 'name2',
    description: 'description',
  },
  {
    id: '3',
    name: 'name3',
    description: 'description',
  },
  {
    id: '4',
    name: 'name4',
    description: 'description',
  },
  {
    id: '5',
    name: 'name5',
    description: 'description',
  },
  {
    id: '6',
    name: 'name6',
    description: 'description',
  },
  {
    id: '7',
    name: 'name7',
    description: 'description',
  },
  {
    id: '8',
    name: 'name8',
    description: 'description',
  },
  {
    id: '9',
    name: 'name9',
    description: 'description',
  },
  {
    id: '10',
    name: 'name10',
    description: 'description',
  },
]

type Props = {
  page: number
  pageSize: number
}

export const useCoursesQuery = ({ page, pageSize }: Props) => {
  const [data, setData] = useState(
    [...courses].splice(page * pageSize, pageSize)
  )

  return {
    loading: false,
    data: {
      courses: data,
    },
    refetch: ({ page, pageSize }: { page: number; pageSize: number }) =>
      setData(() => {
        const result = [...courses]
        return result.splice(page * pageSize, pageSize)
      }),
    total: 10,
  }
}
