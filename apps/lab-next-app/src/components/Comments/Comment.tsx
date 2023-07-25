import { Avatar, Container, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'

type Props = {
  author: string
  date: string
  text: string
  avatar: string
}

function Comment({ author, date, text, avatar }: Props) {
  return (
    <>
      <Avatar alt={author} src={avatar} />
      <Container>
        <Stack direction="row" spacing={2} alignItems="baseline">
          <Typography fontSize={13}>{author}</Typography>
          <Typography fontSize={10}>{date}</Typography>
        </Stack>
        <Typography>{text}</Typography>
      </Container>
    </>
  )
}

export default Comment
