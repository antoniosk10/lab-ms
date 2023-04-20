import { Box, Typography } from '@mui/material'

import Comment from './components/Comment'
import CommentForm from './components/CommentForm'

import AccordionPanel from '../AccordionPanel'

import { CommentType } from '@/src/types'

type Props = {
  comments: CommentType[]
}

function CommentSection({ comments }: Props) {
  return (
    <>
      {comments.map((comment) => (
        <AccordionPanel
          key={comment.id}
          SummaryComponent={
            <Box display="flex" alignItems="center" width="100%">
              <Comment
                author={comment.author}
                date={comment.date}
                avatar={comment.avatar}
                text={comment.text}
              />
              <Typography
                whiteSpace="nowrap"
                fontSize={10}
                sx={{ textDecoration: 'underline' }}
              >
                {`${comment.subComments.length} discussion`}
              </Typography>
            </Box>
          }
          DetailsComponent={
            <Box pl={10} display="flex">
              {comment.subComments.map((subComment) => (
                <Comment
                  key={subComment.date}
                  author={subComment.author}
                  date={subComment.date}
                  avatar={subComment.avatar}
                  text={subComment.text}
                />
              ))}
            </Box>
          }
          ExpandButton={true}
        />
      ))}
      <CommentForm />
    </>
  )
}

export default CommentSection
