import { LessonResDto } from '@modules/mentor/lab/dto'
import { Container } from '@mui/material'
import { useMemo } from 'react'

import DraggableItem from '@/src/components/DraggableItem'
import { theme } from '@/src/theme'

type Props = {
  altTitle: string
  lesson: LessonResDto
  onLessonClick: () => void
  selectedLesson: LessonResDto | null
  onLessonDelete: (id: number) => void
  onLessonDuplicate: (duplicate: LessonResDto) => void
}

function Lesson({
  lesson,
  altTitle,
  onLessonClick,
  selectedLesson,
  onLessonDelete,
  onLessonDuplicate,
}: Props) {
  const isEdit = selectedLesson?.id === lesson.id

  const style = useMemo(
    () => ({
      backgroundColor: isEdit
        ? theme.palette.primary.main
        : theme.palette.common.white,
      border: '1px solid',
      borderRadius: '4px',
      borderColor: theme.palette.primary.main,
      color: isEdit ? theme.palette.common.white : theme.palette.primary.main,
      cursor: 'pointer',
    }),
    [isEdit]
  )

  const options = useMemo(
    () => [
      {
        name: 'Duplicate',
        action: () => {
          onLessonDuplicate(lesson)
        },
      },
      {
        name: 'Delete',
        action: () => {
          onLessonDelete(lesson.id)
        },
      },
    ],
    []
  )

  return (
    <Container onClick={() => onLessonClick()} sx={style}>
      <DraggableItem title={altTitle} options={options} verticalDots={true} />
    </Container>
  )
}

export default Lesson
