import Tab from '@mui/material/Tab'
import MuiTabs from '@mui/material/Tabs'
import { ROUTES } from '@src/constants/routes'
import { TABS } from '@src/constants/tabs'
import { ValuesOfObject } from '@src/utils/types'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  activeTab: ValuesOfObject<typeof TABS> | false
}

function Tabs({ activeTab }: Props) {
  const router = useRouter()

  const handleChange = async (
    event: React.SyntheticEvent,
    value: ValuesOfObject<typeof TABS>
  ) => {
    const routes = {
      [TABS.COURSE]: ROUTES.COURSE,
      [TABS.PEOPLE]: ROUTES.PEOPLE,
      [TABS.SCHEDULE]: ROUTES.SCHEDULE,
    }

    await router.push(routes[value])
  }

  return (
    <MuiTabs
      value={activeTab}
      textColor="secondary"
      indicatorColor="secondary"
      onChange={handleChange}
    >
      <Tab label="Course" value={TABS.COURSE} />
      <Tab label="People" value={TABS.PEOPLE} />
      <Tab label="Schedule" value={TABS.SCHEDULE} />
    </MuiTabs>
  )
}

export default Tabs
