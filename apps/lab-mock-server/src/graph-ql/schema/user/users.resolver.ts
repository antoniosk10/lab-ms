import { Arg, Mutation, Resolver } from 'type-graphql'
import { LoginResponse, RegistrationResponse } from '@src/graph-ql/schema/user/users'

@Resolver()
export class UsersResolver {
  @Mutation()
  login(@Arg('email') email: string, @Arg('password') password: string): LoginResponse {
    return { result: { token: `${email}-${password}` }, errors: null }
  }
  
  @Mutation()
  registerUser(@Arg('email') email: string, @Arg('password') password: string,
               @Arg('password_confirmation') passwordConfirmation: string,
               @Arg('first_name') firstName: string,
               @Arg('last_name') lastName: string,
               @Arg('birthday') birthday: string,
               @Arg('role') role: string): RegistrationResponse {
    return { result: { id: '1111', email, first_name: firstName, last_name: lastName, birthday, role }, errors: null }
  }
}
