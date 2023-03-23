import React from 'react'
import { Button } from '@mui/material'
import { LessonResDto } from '@modules/mentor/lab/dto'

type Props = {
  altTitle: string
  lesson: LessonResDto
}

function Lesson({ lesson, altTitle }: Props) {
  return (
    <Button fullWidth={true} color="primary">
      {lesson.title || altTitle}
    </Button>
  )
}

export default Lesson
