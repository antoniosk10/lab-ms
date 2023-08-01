import { ReactNode } from 'react'
import { FieldValues, FormProvider as RHFProvider, Path, UseFormReturn } from 'react-hook-form'
import { isFieldErrors } from '@src/utils/utils'
import { useSnackbar } from 'notistack'

import { ErrorsField, GraphQLLinkError } from '@/src/types'

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
  const { enqueueSnackbar  } = useSnackbar()
  
  const handleFormSubmit = async (values: T) => {
    try {
      await onSubmit(values as T)
    } catch (errorLink) {
      const error:GraphQLLinkError = errorLink as GraphQLLinkError
      const {networkError} = error
      
      if (isFieldErrors(networkError)) {
        (networkError as ErrorsField).fieldErrors.forEach((field) =>
          setError(field.location.join('.') as Path<T>, {
            type: field.type,
            message: field.message
          })
        )
      }
      else {
        enqueueSnackbar('Something went wrong', { variant: 'error' })
        throw networkError
      }
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