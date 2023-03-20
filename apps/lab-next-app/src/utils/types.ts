export type KeysOfObject<T> = keyof T
export type ValueOfObject<T> = T[KeysOfObject<T>]