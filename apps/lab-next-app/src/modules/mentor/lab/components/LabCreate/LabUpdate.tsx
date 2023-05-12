import { Box, CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'

import LabCreate from './LabCreate'

import { ModuleResDto } from '../../dto'

import { useCourseQuery } from '@/src/schemas/courses/course.generated'

const modules: ModuleResDto[] = [
  {
    id: '1',
    title: 'first module',
    isTemporary: false,
    lessons: [
      {
        id: '1',
        title: 'My lesson',
        description: 'sadasd',
        accessible: true,
        image: null,
        file: '<file_name.docx>',
        github: '<Github_url_name>',
        youtube: '<youtube_url_name>',
        isTemporary: false,
      },
      {
        id: '2',
        title: null,
        description: null,
        accessible: true,
        image: null,
        file: null,
        github: null,
        youtube: '<youtube_url_name>',
        isTemporary: false,
      },
    ],
  },
  {
    id: '2',
    title: '',
    isTemporary: false,
    lessons: [
      {
        id: '3',
        title: null,
        description: null,
        accessible: true,
        image: null,
        file: null,
        github: null,
        youtube: '<youtube_url_name>',
        isTemporary: false,
      },
      {
        id: '4',
        title: null,
        description: null,
        accessible: true,
        image: null,
        file: null,
        github: null,
        youtube: '<youtube_url_name>',
        isTemporary: false,
      },
    ],
  },
]

function LabUpdate() {
  const { query } = useRouter()
  const { data, loading } = useCourseQuery({
    variables: { id: query.id as string },
  })
  const courseName = data?.course?.name || ''

  return loading ? (
    <Box sx={{ display: 'flex' }} justifyContent="center" pt={5}>
      <CircularProgress />
    </Box>
  ) : (
    <LabCreate modules={modules} courseName={courseName} />
  )
}

export default LabUpdate
