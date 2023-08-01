import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class FieldErrors {
  @Field(() => [String])
  location: string[]
  
  @Field(() => String)
  message: string
  
  @Field(() => String)
  type: string
}

@ObjectType()
export class ErrorField {
  @Field(() => [FieldErrors])
  fieldErrors: FieldErrors[]
  
  @Field(() => [String])
  nonFieldErrors: string[]
  
  @Field(() => Number)
  errorCode: number
}
