import * as React from 'react'

import AutocompleteField, { AutocompleteFieldProps, DefaultOptionType } from './AutocompleteField'

export type SearchFieldProps<OptionType extends DefaultOptionType> =
  AutocompleteFieldProps<OptionType, false, false>
  & Record<string, unknown>

export type SearchDefaultOptionType = DefaultOptionType

function SearchField<
  OptionType extends DefaultOptionType,
> ({ getOptionLabel, ...props }: SearchFieldProps<OptionType>) {
  return (
    <AutocompleteField
      getOptionLabel={getOptionLabel}
      {...props}
    />
  )
}

export default SearchField
