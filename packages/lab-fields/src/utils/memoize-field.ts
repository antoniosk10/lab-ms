import { FunctionComponent, memo } from 'react'

import { FormMethods } from '../components/FieldWrapper'

type Props = FormMethods

export const memoizeField = <T extends Props>(
  Component: FunctionComponent<T>,
  condition?: (prevProps: T, nextProps: T) => boolean
) => {
  const defaultCondition = (prevProps: T, nextProps: T) =>
    Object.keys(prevProps.formMethods.formState.errors).length ===
      Object.keys(nextProps.formMethods.formState.errors).length &&
    prevProps.formMethods.formState.isDirty ===
      nextProps.formMethods.formState.isDirty

  return memo(Component, condition || defaultCondition)
}
