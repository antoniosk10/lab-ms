import React, { FunctionComponent } from 'react'
import { useFormContext, UseFormReturn } from 'react-hook-form'

export type FormMethods = {
  formMethods: UseFormReturn
}

function FieldWrapper<Props extends FormMethods> (
  Component: FunctionComponent<Props>
): FunctionComponent<Omit<Props, keyof FormMethods>> {
  return function FormComponent (props: Omit<Props, keyof FormMethods>) {
    const methods = useFormContext()

    return (
      <Component {...props as Props} formMethods={methods} />
    )
  }
}

export default FieldWrapper
