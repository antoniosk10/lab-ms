import BannerTitle from '@modules/mentor/lab/components/LabCreate/Banner/BannerTitle'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

const BannerStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  width: '100%',
  height: '250px',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'flex-end',
}))

function BannerForm() {
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
          width: '100%',
          padding: '24px',
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

export default BannerForm
