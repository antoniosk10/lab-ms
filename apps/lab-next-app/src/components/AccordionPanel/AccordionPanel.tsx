import { SvgIconComponent } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
} from '@mui/material'
import { useCallback, useState } from 'react'

type Props = {
  SummaryComponent: JSX.Element
  DetailsComponent: JSX.Element
  ExpandIcon?: SvgIconComponent
  ExpandButton?: boolean
  isExpanded?: boolean
}

function AccordionPanel({
  SummaryComponent,
  DetailsComponent,
  ExpandIcon,
  ExpandButton,
  isExpanded = false,
}: Props) {
  const [expand, setExpand] = useState(isExpanded)

  const toggleAccordion = useCallback(() => {
    setExpand((prev) => !prev)
  }, [])

  return (
    <>
      <Accordion
        expanded={expand}
        sx={{
          ' .MuiAccordionSummary-root:hover:not(.Mui-disabled)': {
            cursor: 'default',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            ExpandIcon && (
              <ExpandIcon
                onClick={toggleAccordion}
                sx={{ ':hover': { cursor: 'pointer' } }}
              />
            )
          }
        >
          <Box display="flex" alignItems="center" width="100%">
            {SummaryComponent}
            {ExpandButton && (
              <Button
                size="small"
                variant="outlined"
                endIcon={<ExpandMoreIcon fontSize="small" />}
                onClick={toggleAccordion}
                sx={{
                  marginLeft: '10px',
                }}
              >
                {expand ? 'Hide' : 'Show'}
              </Button>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails>{DetailsComponent}</AccordionDetails>
      </Accordion>
      <Divider sx={{ marginY: '10px' }} />
    </>
  )
}

export default AccordionPanel
