import React from 'react'
import { LessonResDto, ModuleResDto } from '../../../dto'
import LessonModule from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModule'
import { Button, Card, CardActionArea, Stack } from '@mui/material'

type Props = {
  modules: ModuleResDto[]
}

function LessonModules({ modules }: Props) {
  return (
    <Stack direction="column" spacing={2}>
      {modules.map((module, index) => (
        <LessonModule key={module.id} altTitle={`Module ${index + 1}`} module={module} />
      ))}
      
      <Card>
        <CardActionArea>
          <Button>
            + Add new module
          </Button>
        </CardActionArea>
      </Card>
    </Stack>
  )
}

export default LessonModules
