import { Arg, Query, Resolver } from 'type-graphql'
import { CourseResponse, CoursesResponse } from '@src/graph-ql/schema/course/course'

import courses from '../../../mock-data/courses.json'

@Resolver()
export class CourseResolver {
  @Query(() => CoursesResponse)
  courses(): CoursesResponse {
    return { result: courses, errors: null }
  }
  
  @Query(() => CourseResponse)
  course(@Arg('id') id: string): CourseResponse {
    const course = courses.find((course) => course.id === id) || courses[0]
    return { result: course, errors: null }
  }
}
