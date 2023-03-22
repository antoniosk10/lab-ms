import React from 'react'
import PageContainer, { PageContent } from '@src/components/PageContainer'
import { Grid } from '@mui/material'
import BannerEdit from '@pages/mentor/lab/components/LabCreate/BannerEdit'
import { FormProvider, useForm } from 'react-hook-form'

type Props = Record<string, unknown>

function LabCreate(props: Props) {
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
                  {/*  Modules */}
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
