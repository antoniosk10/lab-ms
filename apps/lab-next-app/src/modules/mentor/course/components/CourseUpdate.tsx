import { Box, CircularProgress } from '@mui/material'

import Course from './Course'

import { ModuleResDto } from '../dto'

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
        isTemporary: false
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
        isTemporary: false
      }
    ]
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
        isTemporary: false
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
        isTemporary: false
      }
    ]
  }
]

type Props = {
  data:any
  loading: boolean,
}

function CourseUpdate({ data, loading }: Props) {
  const courseName = data?.course?.name || ''
  
  return loading ? (
    <Box sx={{ display: 'flex' }} justifyContent="center" pt={5}>
      <CircularProgress/>
    </Box>
  ) : (
    <Course modules={modules} courseName={courseName}/>
  )
}

export default CourseUpdate
