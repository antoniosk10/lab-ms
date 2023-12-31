import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { Controller } from 'react-hook-form'
import { AutocompleteFreeSoloValueMapping } from '@mui/material'

import FieldWrapper, { FormMethods } from './FieldWrapper'

function sleep (delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export type DefaultOptionType = {
  id: number
  title: string
}

export type AutocompleteFieldProps<OptionType, Multiple extends boolean, DisableClearable extends boolean, > = {
    api: string
    name: string
    label?: string
    variant?: 'standard' | 'filled' | 'outlined'
    getOptionLabel?: (option: OptionType | AutocompleteFreeSoloValueMapping<false>) => string
    isOptionEqualToValue?: (option: OptionType, value: OptionType) => boolean
  }
  & FormMethods
  & Omit<
  AutocompleteProps<OptionType, Multiple, DisableClearable, false>,
  'getOptionLabel' | 'isOptionEqualToValue' | 'options' | 'renderInput'
>

function defaultGetOptionLabel<T extends DefaultOptionType> (option: T | AutocompleteFreeSoloValueMapping<false>) {
  return option.title
}

const defaultIsOptionEqualToValue = <T extends DefaultOptionType>(option: T, value: T) => option.id === value.id

function AutocompleteField<
  OptionType extends DefaultOptionType,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
> (props: AutocompleteFieldProps<OptionType, Multiple, DisableClearable>) {
  const {
    api,
    name,
    label,
    formMethods,
    getOptionLabel = defaultGetOptionLabel,
    isOptionEqualToValue = defaultIsOptionEqualToValue,
    ...rest
  } = props

  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<readonly OptionType[]>([])
  const loading = open && options.length === 0

  React.useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    (async () => {
      await sleep(1e3)

      if (active) {
        const topFilms = [
          { id: 1, title: 'The Shawshank Redemption' },
          { id: 2, title: 'The Godfather' }
        ] as OptionType[]

        // make api request
        Promise.resolve(api)
        setOptions([...topFilms])
      }
    })()

    return () => {
      active = false
    }
  }, [api, loading])

  React.useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Controller
      name={name}
      control={formMethods.control}
      render={({ field }) => (
        <Autocomplete
          sx={{ width: '100%' }}
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          value={field.value}
          onChange={(e, value) => field.onChange(value)}
          isOptionEqualToValue={isOptionEqualToValue}
          getOptionLabel={getOptionLabel}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              name={field.name}
              label={label}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                )
              }}
            />
          )}
          {...rest}
        />
      )}
    />
  )
}

export default FieldWrapper(AutocompleteField)
