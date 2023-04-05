import React, { useCallback } from 'react'
import { Card, CardContent, Divider } from '@mui/material'
import Lessons from '@modules/mentor/lab/components/LabCreate/LessonModules/Lessons'
import { useFormContext } from 'react-hook-form'

import { LessonResDto, ModuleResDto } from '../../../dto'

type Props = {
  altTitle: string
  module: ModuleResDto
  onLessonClick: (id: number) => void
}

const emptyLesson: Omit<LessonResDto, 'id'> = {
  image: null,
  github: null,
  file: null,
  accessible: null,
  description: null,
  title: null,
  isTemporary: false
}

function LessonModule ({ module, altTitle, onLessonClick }: Props) {
  const { setValue, getValues } = useFormContext()
  const moduleId = module.id

  const handleLessonAdd = useCallback(() => {
    const moduleKey = `modules[${moduleId}]`
    const formModule: ModuleResDto = getValues(moduleKey)
    const newModule = { ...formModule, lessons: [...formModule.lessons, emptyLesson] }

    setValue(moduleKey, newModule)
  }, [getValues, setValue, moduleId])

  return (
    <Card>
      <CardContent>
        {module.title || altTitle}
      </CardContent>

      <Divider />

      <CardContent>
        <Lessons
          lessons={module.lessons}
          onLessonClick={onLessonClick}
          onLessonAdd={handleLessonAdd}
        />
      </CardContent>

    </Card>
  )
}

export default LessonModule
