import { ReactNode } from 'react'
import {
  FieldValues,
  Path,
  FormProvider as RHFProvider,
  UseFormReturn,
} from 'react-hook-form'

import { ErrorAPI } from '@/src/types'

type Props<T extends FieldValues> = {
  onSubmit: (values: T) => void
  children: ReactNode
} & UseFormReturn<T>

function FormProvider<T extends FieldValues>({
  onSubmit,
  children,
  ...formProps
}: Props<T>) {
  const { setError } = formProps

  const handleFormSubmit = async (values: T) => {
    try {
      await onSubmit(values as T)
    } catch (e) {
      (e as ErrorAPI).fieldErrors.forEach((field) =>
        setError(field.location.join('.') as Path<T>, {
          type: field.type,
          message: field.message,
        })
      )
    }
  }

  return (
    <RHFProvider {...formProps}>
      <form onSubmit={formProps.handleSubmit(handleFormSubmit)}>
        {children}
      </form>
    </RHFProvider>
  )
}

export default FormProvider