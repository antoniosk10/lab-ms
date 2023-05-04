import Lesson from '@modules/mentor/lab/components/LabCreate/LessonModules/Lesson'
import { LessonResDto } from '@modules/mentor/lab/dto'
import { Button, Stack } from '@mui/material'
import { useMemo } from 'react'
import { DropResult } from 'react-beautiful-dnd'

import DraggableList from '@/src/components/DraggableList'
import { DragHandleProps } from '@/src/components/DraggableList/DraggableListItem'

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
  const draggableData = useMemo(
    () =>
      lessons.map((lesson, index) => ({
        key: lesson.id,
        renderComponent: (dragHandleProps: DragHandleProps) => (
          <Lesson
            lesson={lesson}
            altTitle={`Lesson ${lesson.id}`}
            onLessonClick={() => onLessonClick(lesson)}
            selectedLesson={selectedLesson}
            onLessonDelete={onLessonDelete}
            onLessonDuplicate={onLessonDuplicate}
            dragHandleProps={dragHandleProps}
          />
        ),
      })),
    [lessons, onLessonClick, onLessonDelete, onLessonDuplicate, selectedLesson]
  )
  return (
    <Stack>
      <DraggableList
        onDragEnd={onLessonDragEnd}
        id="droppable-lessons"
        data={draggableData}
      />
      <Button onClick={() => onLessonAdd()}>+ Add new lesson</Button>
    </Stack>
  )
}

export default Lessons
