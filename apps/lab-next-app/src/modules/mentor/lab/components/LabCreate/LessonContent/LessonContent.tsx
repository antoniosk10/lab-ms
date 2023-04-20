import { LessonResDto } from '@modules/mentor/lab/dto'

import LessonContentForm from './LessonContentForm'
import LessonContentPlaceholder from './LessonContentPlaceholder'

type Props = {
  lesson: LessonResDto
  isEdit: boolean
  onEdit: () => void
  onPublish: () => void
}

function LessonContent({ lesson, onPublish, isEdit, onEdit }: Props) {
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

export default LessonContent
