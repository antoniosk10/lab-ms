import BannerForm from '@modules/mentor/lab/components/LabCreate/Banner'
import LessonContent from '@modules/mentor/lab/components/LabCreate/LessonContent/LessonContent'
import LessonModules from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModules'
import { ModuleResDto } from '@modules/mentor/lab/dto'
import { Grid } from '@mui/material'
import PageContainer, { PageContent } from '@src/components/PageContainer'
import { FormProvider, useForm } from 'react-hook-form'

type Props = {
  modules: ModuleResDto[]
}

const emptyModule: Omit<ModuleResDto, 'id'> = {
  title: '',
  lessons: [],
  isTemporary: true
}

function LabCreate ({ modules }: Props) {
  const bannerForm = useForm()
  const modulesForm = useForm<{ modules: ModuleResDto[] }>({
    defaultValues: { modules }
  })

  const lessonForm = useForm<{ selectedLessonId: number }>({
    defaultValues: { selectedLessonId: modules[0].lessons[0].id || 0 }
  })

  const handleModuleAdd = (duplicate?:ModuleResDto) => {
    const modules = modulesForm.getValues('modules')
    const newModule = duplicate || emptyModule
    const newModules = [...modules, { ...newModule, id:modules.length + 1 }]
    modulesForm.setValue('modules', newModules)
  }

  const handleModuleDelete = (id:number) => {
    const modules = modulesForm.getValues('modules')
    const updatedModules = modules.filter((el) => el.id !== id)
    modulesForm.setValue('modules', updatedModules)
  }

  const handleLessonClick = (id: number) => {
    lessonForm.setValue('selectedLessonId', id)
  }

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
                    onModuleAdd={handleModuleAdd}
                    onModuleDelete={handleModuleDelete}
                    onLessonClick={handleLessonClick}
                  />
                </FormProvider>
              </Grid>

              <Grid item={true} xs={12} lg={9}>
                <FormProvider {...lessonForm}>
                  <LessonContent lesson={{ id: 1 }} />
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
