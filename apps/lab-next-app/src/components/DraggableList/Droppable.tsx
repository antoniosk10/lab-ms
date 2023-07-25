import { useEffect, useState } from 'react'
import { Droppable as DroppableDnd, DroppableProps } from 'react-beautiful-dnd'

function Droppable({ children, ...props }: DroppableProps) {
  const [isBrowser, setIsBrowser] = useState(false)
  
  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined')
  }, [])
  
  return isBrowser ? <DroppableDnd {...props}>{children}</DroppableDnd> : null
}

export default Droppable
