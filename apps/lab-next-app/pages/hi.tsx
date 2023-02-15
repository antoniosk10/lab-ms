import React from 'react'
import { hello } from 'lab-table'
type Props = Record<string, unknown>

function hi(props: Props) {
  hello()
  return (
    <>content</>
  )
}

export default hi
