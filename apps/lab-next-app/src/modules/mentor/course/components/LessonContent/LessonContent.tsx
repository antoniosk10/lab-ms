import { LessonResDto } from '@modules/mentor/course/dto'

import LessonContentForm, { LessonFields } from './LessonContentForm/LessonContentForm'
import LessonContentPlaceholder from './LessonContentPlaceholder/LessonContentPlaceholder'

type Props = {
  lesson: LessonResDto
  isEdit: boolean
  onEdit: () => void
  onPublish: (lessonId: string, data: LessonFields) => void
}

export function LessonContent({ lesson, onPublish, isEdit, onEdit }: Props) {
  return (
    <>
      {isEdit ? (
        <LessonContentForm lesson={lesson} onPublish={onPublish} />
      ) : (
        <LessonContentPlaceholder lesson={lesson} onEdit={onEdit} />
      )}
    </>
  )
}
