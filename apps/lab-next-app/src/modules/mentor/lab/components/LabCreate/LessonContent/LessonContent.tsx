import { LessonResDto } from '@modules/mentor/lab/dto'

import LessonContentForm, { LessonFields } from './LessonContentForm'
import LessonContentPlaceholder from './LessonContentPlaceholder'

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
