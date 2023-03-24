import React, { useState } from 'react'
import PageContainer, { PageContent } from '@src/components/PageContainer'
import { Grid } from '@mui/material'
import BannerForm from '@modules/mentor/lab/components/LabCreate/Banner'
import { FormProvider, useForm } from 'react-hook-form'
import LessonModules from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModules'
import { LessonResDto, ModuleResDto } from '@modules/mentor/lab/dto'
import LessonContent from '@modules/mentor/lab/components/LabCreate/LessonContent/LessonContent'

type Props = {
  modules: ModuleResDto[]
}

const emptyModule: ModuleResDto = {
  id: 0,
  title: '',
  lessons: [],
  isTemporary: true
}

function LabCreate({ modules }: Props) {
  const bannerForm = useForm()
  const modulesForm = useForm<{ modules: ModuleResDto[] }>({
    defaultValues: { modules }
  })
  
  const lessonForm = useForm<{ selectedLesson: LessonResDto }>({
    defaultValues: { selectedLesson: modules[0].lessons[0] || {} }
  })
  
  const handleModuleAdd = () => {
    const modules = modulesForm.getValues('modules')
    const newModules = [...modules, emptyModule]
    modulesForm.setValue('modules', newModules)
  }
  
  const handleLessonClick = (id: number) => {
    lessonForm.setValue('selectedLesson', id)
  }
  
  return (
    <PageContainer>
      <PageContent>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <FormProvider {...bannerForm}>
              <BannerForm/>
            </FormProvider>
          </Grid>
          
          <Grid item={true} xs={12}>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={12} lg={3}>
                <FormProvider {...modulesForm}>
                  <LessonModules
                    modules={modules}
                    onModuleAdd={handleModuleAdd}
                    onLessonClick={handleLessonClick}
                  />
                </FormProvider>
              </Grid>
              
              <Grid item={true} xs={12} lg={9}>
                <FormProvider {...lessonForm}>
                  <LessonContent lesson={{ id: 1 }}/>
                </FormProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PageContent>
    </PageContainer>
  )
}

export default LabCreate
