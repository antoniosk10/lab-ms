import React from 'react'

import MultiAutocompleteField, { MultiAutocompleteFieldProps } from '@src/components/Fields/Base/MultiAutocompleteField'

import { DefaultOptionType } from './AutocompleteField'

export type SearchMultiSelectFieldProps<OptionType, DisableClearable extends boolean> = Record<string, unknown>
  & MultiAutocompleteFieldProps<OptionType, DisableClearable>

function SearchMultiSelectField<
  OptionType extends DefaultOptionType,
  DisableClearable extends boolean = false,
> (props: SearchMultiSelectFieldProps<OptionType, DisableClearable>) {
  return (
    <MultiAutocompleteField {...props} />
  )
}

export default SearchMultiSelectField
