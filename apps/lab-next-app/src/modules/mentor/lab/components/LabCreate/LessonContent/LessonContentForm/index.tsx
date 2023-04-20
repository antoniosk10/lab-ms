import { Card, Stack, TextField } from '@mui/material'

import UploadSection from './components/UploadSection'

import { LessonResDto } from '../../../../dto'

import SplitButton from '@/src/components/SplitButton'
import { MenuOption } from '@/src/types'

type Props = {
  onPublish: () => void
  lesson: LessonResDto | undefined
}

function LessonContentForm({ onPublish, lesson }: Props) {
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
        <TextField placeholder="Lesson <NAME>" value={lesson?.title} />
        <TextField
          value={lesson?.description}
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
