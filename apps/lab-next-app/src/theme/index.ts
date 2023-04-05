import { createTheme } from '@mui/material'

import { components } from './light/components'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3'
    },
    secondary: {
      main: '#FF9900'
    }
  },
  components
})
