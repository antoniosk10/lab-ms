import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useCallback, useMemo } from 'react'
import { DropResult } from 'react-beautiful-dnd'

import Lessons from './Lessons'

import { LessonResDto, ModuleResDto } from '../../../dto'

import AccordionPanel from '@/src/components/AccordionPanel'
import { DragHandleProps } from '@/src/components/DraggableList/DraggableListItem'
import { ItemWithMenu } from '@/src/components/ItemWithMenu'

type Props = {
  altTitle: string
  module: ModuleResDto
  onModuleDuplicate: (duplicate: ModuleResDto) => void
  onModuleDelete: (id: string) => void
  onLessonClick: (lesson: LessonResDto) => void
  onLessonAdd: (moduleId: string) => void
  onLessonDuplicate: (moduleId: string, duplicate: LessonResDto) => void
  onLessonDelete: (moduleId: string, lessonId: string) => void
  onLessonDragEnd: (moduleId: string, props: DropResult) => void
  selectedLesson: LessonResDto | null
  isExpanded: boolean
  dragHandleProps: DragHandleProps
}

function LessonModule({
  module,
  altTitle,
  onModuleDelete,
  onModuleDuplicate,
  onLessonClick,
  onLessonAdd,
  onLessonDelete,
  selectedLesson,
  onLessonDuplicate,
  onLessonDragEnd,
  isExpanded,
  dragHandleProps,
}: Props) {
  const moduleId = module.id

  const options = useMemo(
    () => [
      {
        name: 'Rename',
        action: () => {},
      },
      {
        name: 'Duplicate',
        action: () => {
          onModuleDuplicate(module)
        },
      },
      {
        name: 'Visible',
        action: () => {},
      },
      {
        name: 'Delete',
        action: () => {
          onModuleDelete(moduleId)
        },
      },
    ],
    [onModuleDuplicate, module, onModuleDelete, moduleId]
  )

  const handleLessonAdd = useCallback(() => {
    onLessonAdd(moduleId)
  }, [moduleId, onLessonAdd])

  const handleLessonDuplicate = useCallback(
    (duplicate: LessonResDto) => {
      onLessonDuplicate(moduleId, duplicate)
    },
    [moduleId, onLessonDuplicate]
  )

  const handleLessonDelete = useCallback(
    (lessonId: string) => {
      onLessonDelete(moduleId, lessonId)
    },
    [moduleId, onLessonDelete]
  )

  const handleLessonDragEnd = useCallback(
    (dropResult: DropResult) => {
      onLessonDragEnd(moduleId, dropResult)
    },
    [moduleId, onLessonDragEnd]
  )

  return (
    <AccordionPanel
      SummaryComponent={
        <ItemWithMenu
          title={module.title || altTitle}
          options={options}
          dragHandleProps={dragHandleProps}
        />
      }
      DetailsComponent={
        <Lessons
          onLessonClick={onLessonClick}
          onLessonAdd={handleLessonAdd}
          onLessonDuplicate={handleLessonDuplicate}
          onLessonDelete={handleLessonDelete}
          lessons={module.lessons}
          selectedLesson={selectedLesson}
          onLessonDragEnd={handleLessonDragEnd}
        />
      }
      ExpandIcon={ExpandMoreIcon}
      isExpanded={isExpanded}
    />
  )
}

export default LessonModule
