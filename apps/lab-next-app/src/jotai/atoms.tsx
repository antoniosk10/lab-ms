import { atom } from 'jotai'

import { User } from '../graphql-gen/graphql'

export const userAtom = atom<User | null>(null)
