import React from 'react'
import { Button } from '@mui/material'
import { LessonResDto } from '@modules/mentor/lab/dto'

type Props = {
  altTitle: string
  lesson: LessonResDto
  onLessonClick: () => void
}

function Lesson ({ lesson, altTitle, onLessonClick }: Props) {
  return (
    <Button fullWidth={true} color="primary" onClick={onLessonClick}>
      {lesson.title || altTitle}
    </Button>
  )
}

export default Lesson
