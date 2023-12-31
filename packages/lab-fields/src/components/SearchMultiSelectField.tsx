import * as React from 'react'

import MultiAutocompleteField, { MultiAutocompleteFieldProps } from './MultiAutocompleteField'
import { DefaultOptionType } from './AutocompleteField'

export type SearchMultiSelectFieldProps<OptionType, DisableClearable extends boolean> = Record<string, unknown>
  & MultiAutocompleteFieldProps<OptionType, DisableClearable>

function SearchMultiSelectField<
  OptionType extends DefaultOptionType,
  DisableClearable extends boolean = false,
> (props: SearchMultiSelectFieldProps<OptionType, DisableClearable>) {
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  return <MultiAutocompleteField {...props} />
}

export default SearchMultiSelectField
