import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Draggable } from 'react-beautiful-dnd'

export type DraggableListItemProps = {
  itemId: string
  index: number
}

const DraggableListItem = ({
  children,
  itemId,
  index,
}: PropsWithChildren<DraggableListItemProps>) => {
  return (
    <Draggable draggableId={itemId} index={index}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </Box>
      )}
    </Draggable>
  )
}

export default DraggableListItem
