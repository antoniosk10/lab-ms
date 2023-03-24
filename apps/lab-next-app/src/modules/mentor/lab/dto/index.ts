// These are mock types. All types will come from graphql


export type ModuleResDto = {
  id: number
  title: string
  lessons: LessonResDto[]
  isTemporary: boolean
}

export type LessonResDto = {
  id: number
  title: string | null
  description: string | null
  accessible: boolean | null
  github: string | null
  image: string | null
  file: string | null
  isTemporary: boolean
}