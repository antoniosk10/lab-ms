import { Field, ID, ObjectType } from 'type-graphql'

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
