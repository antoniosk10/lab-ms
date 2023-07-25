import GitHubIcon from '@mui/icons-material/GitHub'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import UploadIcon from '@mui/icons-material/Upload'
import { Grid } from '@mui/material'

import AssetsItem from './AssetsItem'

type Props = {
  youtube: string | null
  github: string | null
  file:string | null
}

function Assets ({ youtube, github, file }: Props) {
  return (
    <Grid container={true} spacing={2}>
      <Grid item={true} xs={6}>
        <AssetsItem title={youtube} Icon={PlayCircleOutlineIcon} />
      </Grid>
      <Grid item={true} xs={6}>
        <AssetsItem title={github} Icon={GitHubIcon} />
      </Grid>
      <Grid item={true} xs={6}>
        <AssetsItem title={file} Icon={UploadIcon} />
      </Grid>
      <Grid item={true} xs={6}>
        <AssetsItem title={file} Icon={UploadIcon} />
      </Grid>
    </Grid>
  )
}

export default Assets
