import { Field, ID, ObjectType } from 'type-graphql'
import { ErrorField } from '@src/graph-ql/schema/error/error'

@ObjectType()
export class Token {
  @Field(() => String)
  token: string
}

@ObjectType()
export class User {
  @Field(() => ID)
  id: string
  
  @Field(() => String)
  email: string
  
  @Field(() => [String])
  first_name: string
  
  @Field(() => String)
  last_name: string
  
  @Field(() => String)
  birthday: string
  
  @Field(() => String)
  role: string
}

@ObjectType()
export class LoginResponse {
  @Field(() => Token, { nullable: true })
  result: Token
  
  @Field(() => ErrorField, { nullable: true })
  errors: ErrorField | null
}

@ObjectType()
export class RegistrationResponse {
  @Field(() => User, { nullable: true })
  result: User
  
  @Field(() => ErrorField, { nullable: true })
  errors: ErrorField | null
}