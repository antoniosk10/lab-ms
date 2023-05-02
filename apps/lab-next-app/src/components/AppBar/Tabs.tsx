import Tab from '@mui/material/Tab'
import MuiTabs from '@mui/material/Tabs'
import * as ROUTES from '@src/constants/routes'
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
      [TABS.MY_LABS]: ROUTES.MY_LABS_PATH,
      [TABS.PEOPLE]: ROUTES.PEOPLE_PATH,
      [TABS.SCHEDULE]: ROUTES.SCHEDULE_PATH,
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
      <Tab label="My labs" value={TABS.MY_LABS} />
      <Tab label="People" value={TABS.PEOPLE} />
      <Tab label="Schedule" value={TABS.SCHEDULE} />
    </MuiTabs>
  )
}

export default Tabs
