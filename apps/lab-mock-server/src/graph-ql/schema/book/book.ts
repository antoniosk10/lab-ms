import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Book {
  @Field(() => ID)
    title: string

  @Field(() => String)
    author: string

  @Field(() => String)
    name: string
}
