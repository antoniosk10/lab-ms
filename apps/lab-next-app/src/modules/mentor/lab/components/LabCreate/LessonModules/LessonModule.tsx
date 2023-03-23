import React from 'react'
import { ModuleResDto } from '../../../dto'
import { Card, CardContent, Divider } from '@mui/material'
import Lessons from '@modules/mentor/lab/components/LabCreate/LessonModules/Lessons'

type Props = {
  altTitle: string
  module: ModuleResDto
}

function LessonModule({ module, altTitle }: Props) {
  return (
    <Card>
      <CardContent>
        {module.title || altTitle}
      </CardContent>
      
      <Divider />
      
      <CardContent>
        <Lessons lessons={module.lessons} />
      </CardContent>
    
    </Card>
  )
}

export default LessonModule
