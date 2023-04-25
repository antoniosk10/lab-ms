import LessonModule from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModule'
import { Button, Stack } from '@mui/material'
import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { LessonResDto, ModuleResDto } from '../../../dto'

type Props = {
  onLessonClick: (lesson: LessonResDto) => void
  selectedLesson: LessonResDto | null
  setEditLesson: () => void
}

const emptyModule: Omit<ModuleResDto, 'id'> = {
  title: '',
  lessons: [],
  isTemporary: true,
}

const emptyLesson: Omit<LessonResDto, 'id'> = {
  image: null,
  github: null,
  youtube: null,
  file: null,
  accessible: null,
  description: null,
  title: null,
  isTemporary: false,
}

function LessonModules({
  onLessonClick,
  selectedLesson,
  setEditLesson,
}: Props) {
  const { getValues, setValue, watch } = useFormContext()
  const modules: ModuleResDto[] = watch('modules')

  const handleModuleAdd = () => {
    const newModules = [...modules, { ...emptyModule, id: uuidv4() }]
    setValue('modules', newModules)
  }

  const handleModuleDuplicate = (duplicate: ModuleResDto) => {
    const newModules = [...modules, { ...duplicate, id: uuidv4() }]
    setValue('modules', newModules)
  }

  const handleModuleDelete = (id: string) => {
    const updatedModules = modules.filter((el) => el.id !== id)
    setValue('modules', updatedModules)
  }

  const getLessonsByModuleId = useCallback(
    (moduleId: string): LessonResDto[] => {
      const modules: ModuleResDto[] = getValues('modules')
      const currentModule = modules.find((el) => el.id === moduleId)
      const currentLessons = currentModule ? currentModule.lessons : []
      return currentLessons
    },
    []
  )

  const updateLessonsList = useCallback(
    (moduleId: string, updatedLessons: LessonResDto[]) => {
      const modules: ModuleResDto[] = getValues('modules')
      const newModules: ModuleResDto[] = modules.map((module) => {
        if (module.id === moduleId)
          return { ...module, lessons: updatedLessons }
        return module
      })

      setValue('modules', newModules)
    },
    []
  )

  const addNewLesson = useCallback((moduleId: string, lesson: LessonResDto) => {
    const newLesson = { ...lesson, id: uuidv4() }
    const currentLessons = getLessonsByModuleId(moduleId)

    updateLessonsList(moduleId, [...currentLessons, newLesson])
    onLessonClick(newLesson)
    setEditLesson()
  }, [])

  const handleLessonAdd = useCallback((moduleId: string) => {
    const newLesson = { ...emptyLesson, id: uuidv4() }
    addNewLesson(moduleId, newLesson)
  }, [])

  const handleDuplicateLesson = useCallback(
    (moduleId: string, duplicate: LessonResDto) => {
      addNewLesson(moduleId, duplicate)
    },
    []
  )

  const handleLessonDelete = useCallback(
    (moduleId: string, lessonId: string) => {
      const currentLessons = getLessonsByModuleId(moduleId)
      const updatedLessons = currentLessons.filter((el) => el.id !== lessonId)

      updateLessonsList(moduleId, updatedLessons)
    },
    []
  )

  return (
    <Stack direction="column" spacing={2}>
      {modules.map((module, index) => (
        <LessonModule
          key={module.id}
          module={module}
          altTitle={`Module ${index + 1}`}
          onLessonClick={onLessonClick}
          onModuleDuplicate={handleModuleDuplicate}
          onModuleDelete={handleModuleDelete}
          onLessonAdd={handleLessonAdd}
          onLessonDuplicate={handleDuplicateLesson}
          onLessonDelete={handleLessonDelete}
          selectedLesson={selectedLesson}
          isExpanded={index === 0}
        />
      ))}

      <Button variant="outlined" onClick={() => handleModuleAdd()}>
        + add new module
      </Button>
    </Stack>
  )
}

export default LessonModules
