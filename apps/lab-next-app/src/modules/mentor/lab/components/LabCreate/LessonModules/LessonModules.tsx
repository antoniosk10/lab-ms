import LessonModule from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModule'
import { Button, Stack } from '@mui/material'
import { useCallback } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { useFormContext } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { LessonResDto, ModuleResDto } from '../../../dto'

import DraggableList from '@/src/components/DraggableList'
import { reorderDraggableList } from '@/src/utils/utils'

type Props = {
  onLessonClick: (lesson: LessonResDto) => void
  selectedLesson: LessonResDto | null
  onLessonAdd: (moduleId: string) => void
  onLessonDuplicate: (moduleId: string, duplicate: LessonResDto) => void
  onLessonDelete: (moduleId: string, lessonId: string) => void
  updateLessonsList: (moduleId: string, updatedLessons: LessonResDto[]) => void
  getLessonsByModuleId: (moduleId: string) => LessonResDto[]
}

const emptyModule: Omit<ModuleResDto, 'id'> = {
  title: '',
  lessons: [],
  isTemporary: true,
}

function LessonModules({
  onLessonAdd,
  onLessonDuplicate,
  onLessonDelete,
  onLessonClick,
  selectedLesson,
  updateLessonsList,
  getLessonsByModuleId,
}: Props) {
  const { setValue, watch } = useFormContext()
  const modules: ModuleResDto[] = watch('modules')

  const handleModuleAdd = useCallback(() => {
    const newModules = [...modules, { ...emptyModule, id: uuidv4() }]
    setValue('modules', newModules)
  }, [modules, setValue])

  const handleModuleDuplicate = useCallback(
    (duplicate: ModuleResDto) => {
      const newModules = [...modules, { ...duplicate, id: uuidv4() }]
      setValue('modules', newModules)
    },
    [modules, setValue]
  )

  const handleModuleDelete = useCallback(
    (id: string) => {
      const updatedModules = modules.filter((el) => el.id !== id)
      setValue('modules', updatedModules)
    },
    [modules, setValue]
  )

  const handleModuleDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) return

      const reorderedModules = reorderDraggableList<ModuleResDto>(
        modules,
        source.index,
        destination.index
      )

      setValue('modules', reorderedModules)
    },
    [modules, setValue]
  )

  const handleLessonDragEnd = useCallback(
    (moduleId: string, { destination, source }: DropResult) => {
      if (!destination) return
      const currentLessons = getLessonsByModuleId(moduleId)

      const reorderedLessons = reorderDraggableList<LessonResDto>(
        currentLessons,
        source.index,
        destination.index
      )

      updateLessonsList(moduleId, reorderedLessons)
    },
    [getLessonsByModuleId, updateLessonsList]
  )

  return (
    <Stack>
      <DraggableList onDragEnd={handleModuleDragEnd} id="droppable-modules">
        {modules.map((module, index) => (
          <LessonModule
            key={module.id}
            module={module}
            altTitle={`Module ${index + 1}`}
            onLessonClick={onLessonClick}
            onModuleDuplicate={handleModuleDuplicate}
            onModuleDelete={handleModuleDelete}
            onLessonAdd={onLessonAdd}
            onLessonDuplicate={onLessonDuplicate}
            onLessonDelete={onLessonDelete}
            onLessonDragEnd={handleLessonDragEnd}
            selectedLesson={selectedLesson}
            isExpanded={index === 0}
          />
        ))}
      </DraggableList>

      <Button variant="outlined" onClick={() => handleModuleAdd()}>
        + add new module
      </Button>
    </Stack>
  )
}

export default LessonModules
