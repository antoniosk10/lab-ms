import React from 'react'
import PageContainer, { PageContent } from '@src/components/PageContainer'
import { Grid } from '@mui/material'
import BannerEdit from '@modules/mentor/lab/components/LabCreate/BannerEdit'
import { FormProvider, useForm } from 'react-hook-form'
import LessonModules from '@modules/mentor/lab/components/LabCreate/LessonModules/LessonModules'
import { ModuleResDto } from '@modules/mentor/lab/dto'
import { emptyArray } from '@src/constants/empty'

type Props = {
  modules: ModuleResDto[]
}

function LabCreate({ modules = emptyArray }: Props) {
  const methods = useForm()
  
  return (
    <FormProvider {...methods}>
      <PageContainer>
        <PageContent>
          <Grid container={true} spacing={3}>
            <Grid item={true} xs={12}>
              <BannerEdit/>
            </Grid>
            
            <Grid item={true} xs={12}>
              <Grid container={true} spacing={3}>
                <Grid item={true} xs={12} lg={3}>
                  <LessonModules modules={modules} />
                </Grid>
                
                <Grid item={true} xs={12} lg={9}>
                  {/*Content*/}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </PageContent>
      </PageContainer>
    </FormProvider>
  )
}

export default LabCreate
