import { Box } from '@mui/material'
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd'

import DraggableListItem from './DraggableListItem'
import { Droppable } from './Droppable'

export type DraggableListProps = {
  onDragEnd: OnDragEndResponder
  children: JSX.Element[]
  id: string
}

const DraggableList = ({ children, onDragEnd, id }: DraggableListProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id}>
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            {children &&
              children.map((child, index) => (
                <DraggableListItem
                  key={child.key}
                  index={index}
                  itemId={`${child.key}`}
                >
                  {child}
                </DraggableListItem>
              ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DraggableList
