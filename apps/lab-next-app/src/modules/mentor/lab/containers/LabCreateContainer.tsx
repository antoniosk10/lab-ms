import LabCreate from '@modules/mentor/lab/components/LabCreate'
import { ModuleResDto } from '@modules/mentor/lab/dto'
import { ROLES } from '@src/constants/roles'
import { TABS } from '@src/constants/tabs'
import LabLayout from '@src/layouts/LabLayout'
import React from 'react'

const modules: ModuleResDto[] = [
  {
    id: 1,
    title: 'first module',
    isTemporary: false,
    lessons: [
      {
        id: 1,
        title: 'My lesson',
        description: 'sadasd',
        accessible: true,
        image: null,
        file: '<file_name.docx>',
        github: '<Github_url_name>',
        youtube:'<youtube_url_name>',
        isTemporary: false
      },
      {
        id: 2,
        title: null,
        description: null,
        accessible: true,
        image: null,
        file: null,
        github: null,
        youtube:'<youtube_url_name>',
        isTemporary: false
      }
    ]
  },
  {
    id: 2,
    title: '',
    isTemporary: false,
    lessons: [
      {
        id: 3,
        title: null,
        description: null,
        accessible: true,
        image: null,
        file: null,
        github: null,
        youtube:'<youtube_url_name>',
        isTemporary: false
      },
      {
        id: 4,
        title: null,
        description: null,
        accessible: true,
        image: null,
        file: null,
        github: null,
        youtube:'<youtube_url_name>',
        isTemporary: false
      }
    ]
  }
]

function LabCreateContainer () {
  return (
    <LabCreate modules={modules} />
  )
}

export default LabCreateContainer

LabCreateContainer.roles = [ROLES.ADMIN, ROLES.MENTOR]

LabCreateContainer.getLayout = function getLayout (page: React.ReactNode) {
  return (
    <LabLayout activeTab={TABS.MY_LABS}>
      {page}
    </LabLayout>
  )
}
