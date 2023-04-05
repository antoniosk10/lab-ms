export type KeysOfObject<T> = keyof T
export type ValuesOfObject<T> = T[KeysOfObject<T>]
