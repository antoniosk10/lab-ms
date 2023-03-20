import React from 'react'
import MuiTabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { TABS } from '@src/constants/tabs'
import { KeysOfObject, ValueOfObject } from '@src/utils/types'
import * as ROUTES from '@src/constants/routes'
import { useRouter } from 'next/router'

type Props = {
  activeTab: ValueOfObject<typeof TABS> | null
}

function Tabs({ activeTab }: Props) {
  const router = useRouter()
  
  const handleChange = async (event: React.SyntheticEvent, value: KeysOfObject<typeof TABS>) => {
    const routes = {
      [TABS.MY_LABS]: ROUTES.MY_LABS_PATH,
      [TABS.PEOPLE]: ROUTES.PEOPLE_PATH,
      [TABS.SCHEDULE]: ROUTES.SCHEDULE_PATH
    }
    
    await router.push(routes[value])
  }
  
  return (
    <MuiTabs value={activeTab} onChange={handleChange}>
      <Tab label="My labs" value={TABS.MY_LABS}/>
      <Tab label="People" value={TABS.PEOPLE}/>
      <Tab label="Schedule" value={TABS.SCHEDULE}/>
    </MuiTabs>
  )
}

export default Tabs
