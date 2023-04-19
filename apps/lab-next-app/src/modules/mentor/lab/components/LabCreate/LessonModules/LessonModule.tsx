import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import Lessons from './Lessons'

import { LessonResDto, ModuleResDto } from '../../../dto'

import BasicMenu from '@/src/components/common/BasicMenu'

type Props = {
  altTitle: string;
  module: ModuleResDto;
  onLessonClick: (id: number) => void;
  onModuleAdd: (duplicate?:ModuleResDto) => void
  onModuleDelete: (id:number) => void
}

const emptyLesson: Omit<LessonResDto, 'id'> = {
  image: null,
  github: null,
  file: null,
  accessible: null,
  description: null,
  title: null,
  isTemporary: false,
}

function LessonModule ({ module, altTitle, onLessonClick, onModuleAdd, onModuleDelete }: Props) {
  const { setValue, getValues } = useFormContext()
  const [expand, setExpand] = useState(false)
  const moduleId = module.id

  const options = useMemo(() => [
    {
      name:'Rename',
      action:() => {}
    },
    {
      name:'Duplicate',
      action: () => {
        const duplicate = getValues(`modules[${moduleId}]`)
        onModuleAdd(duplicate)
      }
    },
    {
      name:'Visible',
      action:() => {}
    },
    {
      name:'Delete',
      action:() => { onModuleDelete(moduleId) }
    }
  ], [getValues, moduleId, onModuleAdd, onModuleDelete])

  const handleLessonAdd = useCallback(() => {
    const moduleKey = `modules[${moduleId}]`
    const formModule: ModuleResDto = getValues(moduleKey)

    const newModule = {
      ...formModule,
      lessons: [...formModule.lessons, emptyLesson],
    }

    setValue(moduleKey, newModule)
  }, [getValues, setValue, moduleId])

  const toggleAccordion = useCallback(() => {
    setExpand((prev) => !prev)
  }, [])

  return (
    <Accordion expanded={expand}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon onClick={toggleAccordion} />}
        aria-controls={altTitle}
        id={`${moduleId}`}

      >
        <Stack sx={{ width:'100%' }} direction="row" spacing={2} alignItems="center" justifyContent="space-between">
          <MenuIcon />
          <Typography>{module.title || altTitle}</Typography>
          <BasicMenu options={options} />
        </Stack>

      </AccordionSummary>
      <AccordionDetails>
        <Lessons onLessonClick={onLessonClick} onLessonAdd={handleLessonAdd} lessons={module.lessons} />
      </AccordionDetails>
    </Accordion>
  )
}

export default LessonModule
