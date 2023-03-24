import React from 'react'
import { LessonResDto, ModuleResDto } from '../../../dto'
import LessonModule from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModule'
import { Button, Card, CardActionArea, Stack } from '@mui/material'

type Props = {
  modules: ModuleResDto[]
  onModuleAdd: () => void
  onLessonClick: (id: number) => void
}

function LessonModules({ modules, onModuleAdd, onLessonClick }: Props) {
  return (
    <Stack direction="column" spacing={2}>
      {modules.map((module, index) => (
        <LessonModule
          key={module.id}
          module={module}
          altTitle={`Module ${index + 1}`}
          onLessonClick={onLessonClick}
        />
      ))}
      
      <Card>
        <CardActionArea onClick={onModuleAdd}>
          + Add new module
        </CardActionArea>
      </Card>
    </Stack>
  )
}

export default LessonModules
