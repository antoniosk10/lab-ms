import React from 'react'
import { Card, CardContent, Grid } from '@mui/material'

type Props = Record<string, unknown>

function LessonContentForm(props: Props) {
  return (
    <Grid container={true} spacing={3}>
      <Grid item={true} xs={12}>
        <Card>
          <CardContent>
          
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item={true} xs={12}>
        <Card>
          <CardContent>
          
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default LessonContentForm
