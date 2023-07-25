import { Chip, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import SplitButton from '@src/components/SplitButton/SplitButton'
import { LessonResDto } from '@modules/mentor/course/dto'
import { MenuOption } from '@src/types'

type Props = {
  onEdit: () => void
  lesson: LessonResDto
}

function Header({ onEdit, lesson }: Props) {
  const options: MenuOption[] = [
    {
      name: 'Save as draft',
      action: () => {},
    },
    {
      name: 'Rename',
      action: () => {},
    },
    {
      name: 'Delete',
      action: () => {},
    },
    {
      name: 'Finish',
      action: () => {},
    },
  ]
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <Typography>{lesson.title}</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Chip label="Published" variant="outlined" color="success" />
        <SplitButton title="Edit lesson" options={options} onClick={onEdit} />
      </Stack>
    </Stack>
  )
}

export default Header
