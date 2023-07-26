import { Arg, Query, Resolver } from 'type-graphql'
import { Course } from '@src/graph-ql/schema/course/course'

import courses from '../../../mock-data/courses.json'

@Resolver()
export class CourseResolver {
  @Query(() => [Course])
  courses (): Course[] {
    return courses
  }

  @Query(() => Course)
  course (@Arg('id') id: string): Course {
    return courses.find((course) => course.id === id) || courses[0]
  }
}
