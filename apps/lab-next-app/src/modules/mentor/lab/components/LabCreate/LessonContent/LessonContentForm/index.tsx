import { Card, Stack, TextField } from '@mui/material'

import UploadSection from './components/UploadSection'

import { LessonResDto } from '../../../../dto'

import SplitButton from '@/src/components/SplitButton'
import { MenuOption } from '@/src/types'

type Props = {
  onPublish: () => void
  lesson: LessonResDto
}

function LessonContentForm({ onPublish, lesson }: Props) {
  const { title, description } = lesson

  const options: MenuOption[] = [
    {
      name: 'Save as draft',
      action: () => {},
    },
    {
      name: 'Schedule',
      action: () => {},
    },
  ]

  return (
    <Card>
      <Stack spacing={2} p={2}>
        <TextField placeholder="Lesson <NAME>" value={title || ''} />
        <TextField
          value={description || ''}
          multiline={true}
          placeholder="Announcement, instructions, reminder, notes, etc..."
          rows={5}
        />
        <Stack direction="row" justifyContent="space-between">
          <UploadSection />
          <SplitButton title="Publish" options={options} onClick={onPublish} />
        </Stack>
      </Stack>
    </Card>
  )
}

export default LessonContentForm
