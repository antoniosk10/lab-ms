import LessonModule from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModule'
import { Button, Stack } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import { ModuleResDto } from '../../../dto'

type Props = {
  onModuleAdd: (dublicate?:ModuleResDto) => void
  onLessonClick: (id: number) => void
  onModuleDelete: (id:number) => void
}

function LessonModules ({ onModuleAdd, onLessonClick, onModuleDelete }: Props) {
  const { watch } = useFormContext()
  const modules:ModuleResDto[] = watch('modules')

  return (
    <Stack direction="column" spacing={2}>
      {modules.map((module, index) => (
        <LessonModule
          key={module.id}
          module={module}
          altTitle={`Module ${index + 1}`}
          onLessonClick={onLessonClick}
          onModuleAdd={onModuleAdd}
          onModuleDelete={onModuleDelete}
        />
      ))}

      <Button variant="outlined" onClick={() => onModuleAdd()}>
        + add new module
      </Button>

    </Stack>
  )
}

export default LessonModules
