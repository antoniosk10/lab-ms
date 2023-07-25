import { TextField } from '@packages/lab-fields'
import { Card, Stack } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import SplitButton from '@src/components/SplitButton/SplitButton'
import { MenuOption } from '@src/types'

import UploadSection from './UploadSection'

import { LessonResDto } from '../../../dto'


export type LessonFields = {
  title: string
  description: string
}

type Props = {
  onPublish: (lessonId: string, data: LessonFields) => void
  lesson: LessonResDto
}

function LessonContentForm({ onPublish, lesson }: Props) {
  const { title, description } = lesson

  const form = useForm({
    defaultValues: {
      title: title || '',
      description: description || '',
    },
  })

  const { handleSubmit, reset } = form

  useEffect(() => {
    reset({
      title: title || '',
      description: description || '',
    })
  }, [description, reset, title])

  const options: MenuOption[] = useMemo(
    () => [
      {
        name: 'Save as draft',
        action: () => {},
      },
      {
        name: 'Schedule',
        action: () => {},
      },
    ],
    []
  )

  const handlePublish = (data: LessonFields) => {
    onPublish(lesson.id, data)
  }

  return (
    <FormProvider {...form}>
      <Card>
        <Stack spacing={2} p={2}>
          <TextField id="title" label="Course name" name="title" />
          <TextField
            multiline={true}
            rows={5}
            id="description"
            label="Announcement, instructions, reminder, notes, etc..."
            name="description"
          />
          <Stack direction="row" justifyContent="space-between">
            <UploadSection />
            <SplitButton
              title="Publish"
              options={options}
              onClick={handleSubmit(handlePublish)}
            />
          </Stack>
        </Stack>
      </Card>
    </FormProvider>
  )
}

export default LessonContentForm
