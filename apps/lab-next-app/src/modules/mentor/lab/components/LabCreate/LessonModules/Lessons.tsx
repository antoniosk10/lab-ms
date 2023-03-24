import React from 'react'
import { LessonResDto } from '@modules/mentor/lab/dto'
import { Button, Stack } from '@mui/material'
import Lesson from '@modules/mentor/lab/components/LabCreate/LessonModules/Lesson'

type Props = {
  lessons: LessonResDto[]
  onLessonClick: (id: number) => void
  onLessonAdd: () => void
}

function Lessons({ lessons, onLessonClick, onLessonAdd }: Props) {
  return (
    <Stack direction="column" spacing={2}>
      {lessons.map((lesson, index) => (
        <Lesson
          key={lesson.id}
          lesson={lesson}
          altTitle={`Lesson ${index + 1}`}
          onLessonClick={() => onLessonClick(lesson.id)}
        />
      ))}
      
      <Button onClick={onLessonAdd}>
        + Add new lesson
      </Button>
    
    </Stack>
  )
}

export default Lessons
