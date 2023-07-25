import LessonModule from '@modules/mentor/course/components/LessonModules/LessonModule'
import { Button, Stack } from '@mui/material'
import { useCallback, useMemo } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { useFormContext } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import DraggableList from '@src/components/DraggableList/DraggableList'
import { DragHandleProps } from '@src/components/DraggableList/DraggableListItem'
import { reorderDraggableList } from '@src/utils/utils'

import { LessonResDto, ModuleResDto } from '../../dto'

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
    [modules, setValue],
  )
  
  const handleModuleDelete = useCallback(
    (id: string) => {
      const updatedModules = modules.filter((el) => el.id !== id)
      setValue('modules', updatedModules)
    },
    [modules, setValue],
  )
  
  const handleModuleDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) return
      
      const reorderedModules = reorderDraggableList<ModuleResDto>(
        modules,
        source.index,
        destination.index,
      )
      
      setValue('modules', reorderedModules)
    },
    [modules, setValue],
  )
  
  const handleLessonDragEnd = useCallback(
    (moduleId: string, { destination, source }: DropResult) => {
      if (!destination) return
      const currentLessons = getLessonsByModuleId(moduleId)
      
      const reorderedLessons = reorderDraggableList<LessonResDto>(
        currentLessons,
        source.index,
        destination.index,
      )
      
      updateLessonsList(moduleId, reorderedLessons)
    },
    [getLessonsByModuleId, updateLessonsList],
  )
  
  const draggableData = useMemo(
    () =>
      modules.map((module, index) => ({
        key: module.id,
        renderComponent: (dragHandleProps: DragHandleProps) => (
          <LessonModule
            module={module}
            altTitle={`Module ${module.id}`}
            onLessonClick={onLessonClick}
            onModuleDuplicate={handleModuleDuplicate}
            onModuleDelete={handleModuleDelete}
            onLessonAdd={onLessonAdd}
            onLessonDuplicate={onLessonDuplicate}
            onLessonDelete={onLessonDelete}
            onLessonDragEnd={handleLessonDragEnd}
            selectedLesson={selectedLesson}
            isExpanded={index === 0}
            dragHandleProps={dragHandleProps}
          />
        ),
      })),
    [
      handleLessonDragEnd,
      handleModuleDelete,
      handleModuleDuplicate,
      modules,
      onLessonAdd,
      onLessonClick,
      onLessonDelete,
      onLessonDuplicate,
      selectedLesson,
    ],
  )
  
  return (
    <Stack>
      <DraggableList
        onDragEnd={handleModuleDragEnd}
        id='droppable-modules'
        data={draggableData}
      />
      
      <Button variant='outlined' onClick={() => handleModuleAdd()}>
        + add new module
      </Button>
    </Stack>
  )
}

export default LessonModules
