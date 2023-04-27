import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react'

type User = {
  name: string
}

export enum TypeAction {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type Action = {
  type: TypeAction
  payload: User
}

type State = User | null

function userReducer(user: State, action: Action) {
  switch (action.type) {
    case TypeAction.LOGIN: {
      return action.payload
    }
    case TypeAction.LOGOUT: {
      return null
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

const UserContext = createContext<State>(null)

const UserDispatchContext = createContext<Dispatch<Action> | null>(null)

export function UserProvider({ children }: PropsWithChildren) {
  const [user, dispatch] = useReducer(userReducer, null)

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}

export function useUserDispatch(): Dispatch<Action> {
  return useContext(UserDispatchContext) as Dispatch<Action>
}
