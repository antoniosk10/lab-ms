import { Box } from '@mui/material'
import {
  Draggable,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd'

export type DraggableListItemProps = {
  itemId: string
  index: number
  renderItem: (dragHandleProps: DragHandleProps) => JSX.Element
}

export type DragHandleProps =
  | DraggableProvidedDragHandleProps
  | null
  | undefined

const DraggableListItem = ({
  itemId,
  index,
  renderItem,
}: DraggableListItemProps) => {
  return (
    <Draggable draggableId={itemId} index={index}>
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.draggableProps}>
          {renderItem(provided.dragHandleProps)}
        </Box>
      )}
    </Draggable>
  )
}

export default DraggableListItem
