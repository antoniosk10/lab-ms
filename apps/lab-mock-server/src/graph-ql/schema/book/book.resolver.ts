import { Arg, Query, Resolver } from 'type-graphql'
import { Book } from '@src/graph-ql/schema/book/book'
import books from '../../../mock-data/books.json'

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  books(): Book[] {
    return books
  }

  @Query(() => Book)
  book(@Arg("title") title: string): Book {
    return books.find((book) => book.title === title) || books[0]
  }
}