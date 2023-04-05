import React, { useState } from 'react'
import { LessonResDto } from '@modules/mentor/lab/dto'
import LessonContentForm from '@modules/mentor/lab/components/LabCreate/LessonContent/LessonContentForm'

import LessonContentPlaceholder from './LessonContentPlaceholder'

type Props = {
  lesson: Partial<LessonResDto>
}

function LessonContent ({ lesson }: Props) {
  const [isEdit, setIsEdit] = useState(false)

  const handlePlaceholderClick = () => {
    setIsEdit(true)
  }

  return (
    <>
      {isEdit || lesson.id
        ? <LessonContentForm />
        : <LessonContentPlaceholder onClick={handlePlaceholderClick} />
      }
    </>
  )
}

export default LessonContent
