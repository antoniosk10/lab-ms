import { Box } from '@mui/material'
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd'

import DraggableListItem, { DragHandleProps } from './DraggableListItem'
import { Droppable } from './Droppable'

type DraggableItem = {
  key: string
  renderComponent: (dragHandleProps: DragHandleProps) => JSX.Element
}
export type DraggableListProps = {
  onDragEnd: OnDragEndResponder
  id: string
  data: DraggableItem[]
}

const DraggableList = ({ data, onDragEnd, id }: DraggableListProps) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId={id}>
      {(provided) => (
        <Box ref={provided.innerRef} {...provided.droppableProps}>
          {data.map((item, index) => (
            <DraggableListItem
              key={item.key}
              index={index}
              itemId={`${item.key}`}
              renderItem={item.renderComponent}
            />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  </DragDropContext>
)

export default DraggableList
