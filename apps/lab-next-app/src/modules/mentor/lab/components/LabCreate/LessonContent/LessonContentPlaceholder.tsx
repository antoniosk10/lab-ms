import React from 'react'
import { Card, CardActionArea, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'

type Props = {
  onClick: () => void
}

function LessonContentPlaceholder ({ onClick }: Props) {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography>Announcement, Instructions, Reminder, Notes, etc...</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default LessonContentPlaceholder
