import React from 'react'
import AppBar from '@src/components/AppBar'

function LabLayout(page:  React.ReactElement<any, string | React.JSXElementConstructor<any>>) {
  return (
    <>
      <AppBar/>
      {page}
    </>
  )
}

export default LabLayout
