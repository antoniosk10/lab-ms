import { LessonResDto } from '@modules/mentor/course/dto'
import { Container } from '@mui/material'
import { useMemo } from 'react'
import  ItemWithMenu  from '@src/components/ItemWithMenu/ItemWithMenu'
import { DragHandleProps } from '@src/components/DraggableList/DraggableListItem'
import { theme } from '@src/theme'

type Props = {
  altTitle: string
  lesson: LessonResDto
  onLessonClick: () => void
  selectedLesson: LessonResDto | null
  onLessonDelete: (id: string) => void
  onLessonDuplicate: (duplicate: LessonResDto) => void
  dragHandleProps: DragHandleProps
}

function Lesson({
  lesson,
  altTitle,
  onLessonClick,
  selectedLesson,
  onLessonDelete,
  onLessonDuplicate,
  dragHandleProps,
}: Props) {
  const isEdit = selectedLesson?.id === lesson.id

  const style = useMemo(
    () => ({
      marginBottom: '10px',
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
    [lesson, onLessonDelete, onLessonDuplicate]
  )

  return (
    <Container onClick={() => onLessonClick()} sx={style}>
      <ItemWithMenu
        title={altTitle}
        options={options}
        verticalDots={true}
        dragHandleProps={dragHandleProps}
      />
    </Container>
  )
}

export default Lesson
