// These are mock types. All types will come from graphql

export type ModuleResDto = {
  id: string
  title: string
  lessons: LessonResDto[]
  isTemporary: boolean
}

export type LessonResDto = {
  id: string
  title: string | null
  description: string | null
  accessible: boolean | null
  github: string | null
  youtube: string | null
  image: string | null
  file: string | null
  isTemporary: boolean
}
