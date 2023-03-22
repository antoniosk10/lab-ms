import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import BannerTitle from '@pages/mentor/lab/components/LabCreate/BannerTitle'
import { useFormContext } from 'react-hook-form'

const BannerStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  width: '100%',
  height: '250px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'flex-end'
}))

type Props = Record<string, unknown>


function BannerEdit(props: Props) {
  const [isEdit, setIsEdit] = useState(false)
  const { getValues } = useFormContext()
  
  const handleTitleChange = () => {
    setIsEdit(false)
  }
  
  return (
    <BannerStyled>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <BannerTitle
          title={getValues('title')}
          isEdit={isEdit}
          onTextClick={() => setIsEdit(true)}
          onTitleAccept={handleTitleChange}
        />
      </Box>
    </BannerStyled>
  )
}

export default BannerEdit
