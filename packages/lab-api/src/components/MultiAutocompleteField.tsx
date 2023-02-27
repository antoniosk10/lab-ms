import * as React from 'react'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { AutocompleteFreeSoloValueMapping } from '@mui/material'
import { Field, FieldProps } from 'formik'
import CircularProgress from '@mui/material/CircularProgress'

function sleep (delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export type DefaultOptionType = {
  id: number
  title: string
}

export type MultiAutocompleteFieldProps<
  OptionType,
  DisableClearable extends boolean,
> = {
  api: string
  name: string
  label?: string
  variant?: 'standard' | 'filled' | 'outlined'
  getOptionLabel?: (option: OptionType | AutocompleteFreeSoloValueMapping<false>) => string
  isOptionEqualToValue?: (option: OptionType, value: OptionType) => boolean
} & Omit<
  AutocompleteProps<OptionType, true, DisableClearable, false>,
  'getOptionLabel' | 'isOptionEqualToValue' | 'options' | 'renderInput'
>

const defaultGetOptionLabel =
  <T extends DefaultOptionType> (option: T | AutocompleteFreeSoloValueMapping<false>) => (option as T).title

const defaultIsOptionEqualToValue = <T extends DefaultOptionType>(option: T, value: T) => option.id === value.id

function MultiAutocompleteField<
  OptionType extends DefaultOptionType,
  DisableClearable extends boolean = false,
> (props: MultiAutocompleteFieldProps<OptionType, DisableClearable>) {
  const {
    api,
    name,
    label,
    size = 'small',
    variant = 'standard',
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

        setOptions([...topFilms])
      }
    })()

    return () => {
      active = false
    }
  }, [loading])

  React.useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <Autocomplete
          sx={{ width: '100%' }}
          multiple={true}
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          disableCloseOnSelect={true}
          options={options}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={isOptionEqualToValue}
          defaultValue={[] as OptionType[]}
          value={field.value || []}
          onChange={(e, value) => form.setFieldValue(field.name || api, value)}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              name={field.name}
              label={label}
              size={size}
              variant={variant}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
          {...rest}
        />
      )}
    </Field>
  )
}

export default MultiAutocompleteField
