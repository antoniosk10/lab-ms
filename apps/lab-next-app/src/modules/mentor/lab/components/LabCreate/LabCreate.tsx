import BannerForm from '@modules/mentor/lab/components/LabCreate/Banner'
import LessonModules from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModules'
import { LessonResDto, ModuleResDto } from '@modules/mentor/lab/dto'
import { Box, Grid, Typography } from '@mui/material'
import PageContainer, { PageContent } from '@src/components/PageContainer'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { LessonFields } from './LessonContent/LessonContentForm'

import { LessonContent } from '@/src/modules/mentor/lab/components/LabCreate/LessonContent/LessonContent'

type Props = {
  modules: ModuleResDto[]
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

function LabCreate({ modules }: Props) {
  const [isLessonEdit, setIsLessonEdit] = useState(false)

  const bannerForm = useForm()
  const modulesForm = useForm<{ modules: ModuleResDto[] }>({
    defaultValues: { modules },
  })

  const lessonForm = useForm<{ selectedLesson: LessonResDto | null }>({
    defaultValues: { selectedLesson: null },
  })

  const selectedLesson = lessonForm.watch('selectedLesson')

  const getLessonsByModuleId = useCallback(
    (moduleId: string): LessonResDto[] => {
      const modules: ModuleResDto[] = modulesForm.getValues('modules')
      const currentModule = modules.find((el) => el.id === moduleId)
      const currentLessons = (currentModule as ModuleResDto).lessons
      return currentLessons
    },
    [modulesForm]
  )
  const getModuleByLessonId = useCallback(
    (lessonId: string): ModuleResDto => {
      const modules = modulesForm.getValues('modules')
      return modules.find((module) =>
        module.lessons.find((lesson) => lesson.id === lessonId)
      ) as ModuleResDto
    },
    [modulesForm]
  )

  const updateLessonsList = useCallback(
    (moduleId: string, updatedLessons: LessonResDto[]) => {
      const modules: ModuleResDto[] = modulesForm.getValues('modules')
      const newModules: ModuleResDto[] = modules.map((module) => {
        if (module.id === moduleId)
          return { ...module, lessons: updatedLessons }
        return module
      })

      modulesForm.setValue('modules', newModules)
    },
    [modulesForm]
  )

  const handleLessonClick = useCallback(
    (lesson: LessonResDto) => {
      setIsLessonEdit(false)
      lessonForm.setValue('selectedLesson', { ...lesson })
    },
    [lessonForm]
  )

  const handleEditLesson = useCallback(() => {
    setIsLessonEdit(true)
  }, [])

  const addNewLesson = useCallback(
    (moduleId: string, lesson: LessonResDto) => {
      const newLesson = { ...lesson, id: uuidv4() }
      const currentLessons = getLessonsByModuleId(moduleId)

      updateLessonsList(moduleId, [...currentLessons, newLesson])
      handleLessonClick(newLesson)
      handleEditLesson()
    },
    [
      getLessonsByModuleId,
      handleEditLesson,
      handleLessonClick,
      updateLessonsList,
    ]
  )

  const handleLessonAdd = useCallback(
    (moduleId: string) => {
      const newLesson = { ...emptyLesson, id: uuidv4() }
      addNewLesson(moduleId, newLesson)
    },
    [addNewLesson]
  )

  const handleDuplicateLesson = useCallback(
    (moduleId: string, duplicate: LessonResDto) => {
      addNewLesson(moduleId, duplicate)
    },
    [addNewLesson]
  )

  const handleLessonDelete = useCallback(
    (moduleId: string, lessonId: string) => {
      const currentLessons = getLessonsByModuleId(moduleId)
      const updatedLessons = currentLessons.filter((el) => el.id !== lessonId)

      updateLessonsList(moduleId, updatedLessons)
    },
    [getLessonsByModuleId, updateLessonsList]
  )

  const handlePublishLesson = useCallback(
    (lessonId: string, data: LessonFields) => {
      const { id } = getModuleByLessonId(lessonId)
      const currentLessons = getLessonsByModuleId(id)
      const updatedLessons = currentLessons.map((lesson) =>
        lesson.id === lessonId ? { ...lesson, ...data } : lesson
      )
      updateLessonsList(id, updatedLessons)
    },
    [getLessonsByModuleId, getModuleByLessonId, updateLessonsList]
  )

  return (
    <PageContainer>
      <PageContent>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <FormProvider {...bannerForm}>
              <BannerForm />
            </FormProvider>
          </Grid>

          <Grid item={true} xs={12}>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={12} lg={3}>
                <FormProvider {...modulesForm}>
                  <LessonModules
                    onLessonClick={handleLessonClick}
                    selectedLesson={selectedLesson}
                    onLessonAdd={handleLessonAdd}
                    onLessonDuplicate={handleDuplicateLesson}
                    onLessonDelete={handleLessonDelete}
                    updateLessonsList={updateLessonsList}
                    getLessonsByModuleId={getLessonsByModuleId}
                  />
                </FormProvider>
              </Grid>
              <Grid item={true} xs={12} lg={9}>
                {selectedLesson ? (
                  <FormProvider {...lessonForm}>
                    <LessonContent
                      lesson={selectedLesson}
                      onEdit={handleEditLesson}
                      isEdit={isLessonEdit}
                      onPublish={handlePublishLesson}
                    />
                  </FormProvider>
                ) : (
                  <Box>
                    <Typography align="center">No Content</Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PageContent>
    </PageContainer>
  )
}

export default LabCreate
