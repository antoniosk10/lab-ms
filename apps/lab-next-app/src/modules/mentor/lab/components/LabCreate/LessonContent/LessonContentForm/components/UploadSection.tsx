import CollectionsIcon from '@mui/icons-material/Collections'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import GitHubIcon from '@mui/icons-material/GitHub'
import { IconButton, Stack } from '@mui/material'

function UploadSection() {
  return (
    <Stack direction="row">
      <IconButton
        aria-label="upload picture"
        component="label"
        sx={{ border: '1px solid', marginRight: '10px' }}
      >
        <input hidden={true} accept="image/*" type="file" />
        <FileUploadIcon />
      </IconButton>
      <IconButton
        aria-label="upload picture"
        component="label"
        sx={{ border: '1px solid', marginRight: '10px' }}
      >
        <input hidden={true} accept="image/*" type="file" />
        <CollectionsIcon />
      </IconButton>
      <IconButton
        aria-label="upload picture"
        component="label"
        sx={{ border: '1px solid', marginRight: '10px' }}
      >
        <input hidden={true} accept="image/*" type="file" />
        <GitHubIcon />
      </IconButton>
    </Stack>
  )
}

export default UploadSection
