import { Field, ID, ObjectType } from 'type-graphql'
import { ErrorField } from '@src/graph-ql/schema/error/error'

@ObjectType()
export class Course {
  @Field(() => ID)
  id: string
  
  @Field(() => String)
  name: string
  
  @Field(() => String)
  description: string
}


@ObjectType()
export class CourseResponse {
  @Field(() => Course, { nullable: true })
  result: Course
  
  @Field(() => ErrorField, { nullable: true })
  errors: ErrorField | null
}

@ObjectType()
export class CoursesResponse {
  @Field(() => [Course], { nullable: true })
  result: Course[]
  
  @Field(() => ErrorField, { nullable: true })
  errors: ErrorField | null
}