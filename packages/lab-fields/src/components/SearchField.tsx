import * as React from 'react'

import AutocompleteField, { AutocompleteFieldProps, DefaultOptionType } from './AutocompleteField'

export type SearchFieldProps<OptionType> = Record<string, unknown>
  & AutocompleteFieldProps<OptionType, false, false>

export type SearchDefaultOptionType = DefaultOptionType

function SearchField<
  OptionType extends DefaultOptionType,
> (props: SearchFieldProps<OptionType>) {
  return (
    <AutocompleteField {...props} />
  )
}

export default SearchField
