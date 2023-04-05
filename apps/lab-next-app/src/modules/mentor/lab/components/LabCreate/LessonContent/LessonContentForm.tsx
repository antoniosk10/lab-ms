import React from 'react'
import { Card, CardContent, Grid } from '@mui/material'

function LessonContentForm () {
  return (
    <form>
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
    </form>
  )
}

export default LessonContentForm
