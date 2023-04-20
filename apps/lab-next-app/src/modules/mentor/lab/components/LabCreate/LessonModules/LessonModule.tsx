import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useCallback, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import Lessons from './Lessons'

import { LessonResDto, ModuleResDto } from '../../../dto'

import AccordionPanel from '@/src/components/AccordionPanel'
import DraggableItem from '@/src/components/DraggableItem'

type Props = {
  altTitle: string
  module: ModuleResDto
  onLessonClick: (lesson: LessonResDto) => void
  onModuleAdd: (duplicate?: ModuleResDto) => void
  onLessonAdd: (moduleId: number) => void
  onLessonDuplicate: (moduleId: number, duplicate: LessonResDto) => void
  onModuleDelete: (id: number) => void
  onLessonDelete: (moduleId: number, lessonId: number) => void
  selectedLesson: LessonResDto | null
}

function LessonModule({
  module,
  altTitle,
  onLessonClick,
  onModuleAdd,
  onLessonAdd,
  onModuleDelete,
  onLessonDelete,
  selectedLesson,
  onLessonDuplicate,
}: Props) {
  const { getValues } = useFormContext()

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
          onModuleAdd(module)
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
    [getValues, moduleId, onModuleAdd, onModuleDelete]
  )

  const handleLessonAdd = useCallback(() => {
    onLessonAdd(moduleId)
  }, [])

  const handleLessonDuplicate = useCallback((duplicate: LessonResDto) => {
    onLessonDuplicate(moduleId, duplicate)
  }, [])

  const handleLessonDelete = useCallback((lessonId: number) => {
    onLessonDelete(moduleId, lessonId)
  }, [])

  return (
    <AccordionPanel
      SummaryComponent={
        <DraggableItem title={module.title || altTitle} options={options} />
      }
      DetailsComponent={
        <Lessons
          onLessonClick={onLessonClick}
          onLessonAdd={handleLessonAdd}
          onLessonDuplicate={handleLessonDuplicate}
          onLessonDelete={handleLessonDelete}
          lessons={module.lessons}
          selectedLesson={selectedLesson}
        />
      }
      ExpandIcon={ExpandMoreIcon}
    />
  )
}

export default LessonModule
