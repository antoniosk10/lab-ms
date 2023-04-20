import Lesson from '@modules/mentor/lab/components/LabCreate/LessonModules/Lesson'
import { LessonResDto } from '@modules/mentor/lab/dto'
import { Button, Stack } from '@mui/material'

type Props = {
  lessons: LessonResDto[]
  onLessonClick: (lesson: LessonResDto) => void
  onLessonAdd: () => void
  onLessonDuplicate: (duplicate: LessonResDto) => void
  onLessonDelete: (lessonId: number) => void
  selectedLesson: LessonResDto | null
}

function Lessons({
  lessons,
  onLessonClick,
  onLessonAdd,
  selectedLesson,
  onLessonDelete,
  onLessonDuplicate,
}: Props) {
  return (
    <Stack direction="column" spacing={2}>
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

      <Button onClick={() => onLessonAdd()}>+ Add new lesson</Button>
    </Stack>
  )
}

export default Lessons
