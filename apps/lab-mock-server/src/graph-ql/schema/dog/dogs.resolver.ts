import { Query, Resolver } from 'type-graphql'
import { Dog, Hello } from '@src/graph-ql/schema/dog/dogs'
import dogs from '@src/mock-data/dogs.json'

@Resolver()
export class DogsResolver {
  @Query(() => [Dog])
  dogs (): Dog[] {
    return dogs
  }

  @Query(() => [Hello])
  hellos (): Hello[] {
    return [{ name: 'hello' }, { name: 'hi' }]
  }
}
