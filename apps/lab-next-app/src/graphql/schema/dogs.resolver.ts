import { Query, Resolver } from 'type-graphql'
import { Dog, Hello } from '@src/graphql/schema/dogs'
import dogs from './dogs.json'

@Resolver()
export class DogsResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return dogs
  }

  @Query(() => [Hello])
  hellos(): Hello[] {
    return [{ name: 'hello' }, { name: 'hi' }]
  }
}
