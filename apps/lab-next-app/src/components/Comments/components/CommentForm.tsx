import SendIcon from '@mui/icons-material/Send'
import { Avatar, InputAdornment, Stack, TextField } from '@mui/material'

function CommentForm() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar />
      <TextField
        fullWidth={true}
        placeholder="Your question / comment / etc."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
              <SendIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  )
}

export default CommentForm
