import React from 'react'
import LabLayout from '@src/layouts/LabLayout'
import { TABS } from '@src/constants/tabs'
import {Stack, Card, CardContent } from '@mui/material'
import { useRouter } from 'next/router'
import CourseRegistration from '@modules/auth/components/CourseRegistration/CourseRegistration'
import CourseRegistrationSuccess from '@modules/auth/components/CourseRegistration/CourseRegistrationSuccess'

export default function CourseRegistrationContainer() {
  const { query } = useRouter()
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        sx={{ width: '100%' }}
      >
        <h1>{ query.courseName ?? 'Course name' } - { query.id } - Course Registration</h1>
        <Card sx={{ width: 'max-content', margin: '0 auto !important' }}>
          <CardContent sx={{ paddingLeft: 4, paddingRight: 4 }}>
            { query.success ? (
              <CourseRegistrationSuccess />
            ) : (
              <CourseRegistration />
            )}
          </CardContent>
        </Card>
      </Stack>
    </>
  )
}

CourseRegistrationContainer.getLayout = function getLayout(page: React.ReactNode) {
  return <LabLayout showContent={false} activeTab={TABS.COURSE}>{page}</LabLayout>
}