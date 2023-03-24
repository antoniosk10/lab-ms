import React from 'react'
import { ROLES } from '@src/constants/roles'
import LabLayout from '@src/layouts/LabLayout'
import { TABS } from '@src/constants/tabs'
import LabCreate from '@modules/mentor/lab/components/LabCreate'
import { ModuleResDto } from '@modules/mentor/lab/dto'

type Props = Record<string, unknown>

const modules: ModuleResDto[] = [
  {
    id: 1,
    title: 'first module',
    isTemporary: false,
    lessons: [
      {
        id: 1,
        title: 'My lesson',
        description: null,
        accessible: true,
        image: null,
        file: null,
        github: null,
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
        isTemporary: false
      }
    ]
  }
]

function LabCreateContainer(props: Props) {
  return (
    <LabCreate modules={modules}/>
  )
}

export default LabCreateContainer

LabCreateContainer.roles = [ROLES.ADMIN, ROLES.MENTOR]

LabCreateContainer.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <LabLayout activeTab={TABS.MY_LABS}>
      {page}
    </LabLayout>
  )
}