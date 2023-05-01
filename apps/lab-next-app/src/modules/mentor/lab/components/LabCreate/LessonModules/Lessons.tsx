import Lesson from '@modules/mentor/lab/components/LabCreate/LessonModules/Lesson'
import { LessonResDto } from '@modules/mentor/lab/dto'
import { Button, Stack } from '@mui/material'
import { DropResult } from 'react-beautiful-dnd'

import DraggableList from '@/src/components/DraggableList'

type Props = {
  lessons: LessonResDto[]
  onLessonClick: (lesson: LessonResDto) => void
  onLessonAdd: () => void
  onLessonDuplicate: (duplicate: LessonResDto) => void
  onLessonDelete: (lessonId: string) => void
  selectedLesson: LessonResDto | null
  onLessonDragEnd: (props: DropResult) => void
}

function Lessons({
  lessons,
  onLessonClick,
  onLessonAdd,
  selectedLesson,
  onLessonDelete,
  onLessonDuplicate,
  onLessonDragEnd,
}: Props) {
  return (
    <Stack>
      <DraggableList onDragEnd={onLessonDragEnd} id="droppable-lessons">
        {lessons.map((lesson, index) => (
          <Lesson
            key={lesson.id}
            lesson={lesson}
            altTitle={`Lesson ${index + 1}`}
            onLessonClick={() => onLessonClick(lesson)}
            selectedLesson={selectedLesson}
            onLessonDelete={onLessonDelete}
            onLessonDuplicate={onLessonDuplicate}
          />
        ))}
      </DraggableList>
      <Button onClick={() => onLessonAdd()}>+ Add new lesson</Button>
    </Stack>
  )
}

export default Lessons
