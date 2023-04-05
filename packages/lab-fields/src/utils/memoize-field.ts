import { FunctionComponent, memo } from 'react'

import { FormMethods } from '../components/FieldWrapper'

type Props = FormMethods

export const memoizeField = <T extends Props>(
  Component: FunctionComponent<T>,
  condition?: (prevProps: T, nextProps: T) => boolean
) => {
  const defaultCondition = (prevProps: T, nextProps: T) => (
    prevProps.formMethods.formState.isDirty === nextProps.formMethods.formState.isDirty
  )

  return memo(Component, condition || defaultCondition)
}
