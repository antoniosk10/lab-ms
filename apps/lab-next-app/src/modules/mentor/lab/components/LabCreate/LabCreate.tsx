import BannerForm from '@modules/mentor/lab/components/LabCreate/Banner'
import LessonModules from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModules'
import { LessonResDto, ModuleResDto } from '@modules/mentor/lab/dto'
import { Box, Grid, Typography } from '@mui/material'
import PageContainer, { PageContent } from '@src/components/PageContainer'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import LessonContent from '@/src/modules/mentor/lab/components/LabCreate/LessonContent/LessonContent'

type Props = {
  modules: ModuleResDto[]
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

  const handleLessonClick = (lesson: LessonResDto) => {
    setIsLessonEdit(false)
    lessonForm.setValue('selectedLesson', { ...lesson })
  }

  const handleEditLesson = () => {
    setIsLessonEdit(true)
  }

  const handlePublishLesson = () => {}

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
                    setEditLesson={handleEditLesson}
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
