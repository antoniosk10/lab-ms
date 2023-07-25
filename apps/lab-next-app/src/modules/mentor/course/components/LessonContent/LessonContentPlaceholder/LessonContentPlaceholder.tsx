import { Box, Card, Divider, Stack, Typography } from '@mui/material'
import CommentSection from '@src/components/Comments/Comments'
import { CommentType } from '@src/types'

import Assets from './Assets'
import Header from './Header'

import { LessonResDto } from '../../../dto'


type Props = {
  onEdit: () => void
  lesson: LessonResDto
}

const comments: CommentType[] = [
  {
    id: 1,
    author: 'Ivan',
    date: '10 January',
    text: 'hello',
    avatar: 'static/1.jpg',
    subComments: [
      {
        id: 1,
        author: 'Ivan',
        date: '10 January',
        text: 'hello',
        avatar: 'static/1.jpg'
      }
    ]
  }
]

function LessonContentPlaceholder({ onEdit, lesson }: Props) {
  return (
    <Card>
      <Stack spacing={2}>
        <Header onEdit={onEdit} lesson={lesson}/>
        <Divider/>
        <Box p={2}>
          <Typography>{lesson.description}</Typography>
        </Box>
        <Divider/>
        <Box p={2}>
          <Assets
            youtube={lesson.youtube}
            github={lesson.github}
            file={lesson.file}
          />
        </Box>
        <Divider/>
        <Box p={2}>
          <CommentSection comments={comments}/>
        </Box>
      </Stack>
    </Card>
  )
}

export default LessonContentPlaceholder
