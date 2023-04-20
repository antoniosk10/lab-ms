import LessonModule from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModule'
import { Button, Stack } from '@mui/material'
import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

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

  const handleModuleAdd = (duplicate?: ModuleResDto) => {
    const newModule = duplicate || emptyModule
    const newModules = [...modules, { ...newModule, id: Date.now() }]
    setValue('modules', newModules)
  }

  const handleModuleDelete = (id: number) => {
    const updatedModules = modules.filter((el) => el.id !== id)
    setValue('modules', updatedModules)
  }

  const getLessonsByModuleId = useCallback(
    (moduleId: number): LessonResDto[] => {
      const moduleKey = moduleId - 1
      const modules = getValues('modules')
      const currentModule = modules[moduleKey]
      const currentLessons = currentModule.lessons
      return currentLessons
    },
    []
  )

  const updateLessonsList = useCallback(
    (moduleId: number, updatedLessons: LessonResDto[]) => {
      const moduleKey = moduleId - 1
      const modules = getValues('modules')
      const currentModule = modules[moduleKey]
      const newModules = [...modules]
      newModules[moduleKey] = { ...currentModule, lessons: updatedLessons }

      setValue('modules', newModules)
    },
    []
  )

  const addNewLesson = useCallback((moduleId: number, lesson: LessonResDto) => {
    const newLesson = { ...lesson, id: Date.now() }
    const currentLessons = getLessonsByModuleId(moduleId)

    updateLessonsList(moduleId, [...currentLessons, newLesson])
    onLessonClick(newLesson)
    setEditLesson()
  }, [])

  const handleLessonAdd = useCallback((moduleId: number) => {
    const newLesson = { ...emptyLesson, id: Date.now() }
    addNewLesson(moduleId, newLesson)
  }, [])

  const handleDuplicateLesson = useCallback(
    (moduleId: number, duplicate: LessonResDto) => {
      addNewLesson(moduleId, duplicate)
    },
    []
  )

  const handleLessonDelete = useCallback(
    (moduleId: number, lessonId: number) => {
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
          onModuleAdd={handleModuleAdd}
          onModuleDelete={handleModuleDelete}
          onLessonAdd={handleLessonAdd}
          onLessonDuplicate={handleDuplicateLesson}
          onLessonDelete={handleLessonDelete}
          selectedLesson={selectedLesson}
        />
      ))}

      <Button variant="outlined" onClick={() => handleModuleAdd()}>
        + add new module
      </Button>
    </Stack>
  )
}

export default LessonModules
