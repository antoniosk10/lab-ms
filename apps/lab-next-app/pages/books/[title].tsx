import { bookContainers } from '@pages/book'
import { apolloClient } from '@src/api/apollo-client'
import { gql } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const title = params?.title
    
    const query = gql(/*GraphQL*/`
      query GetServerBooks ($title: String!){
        book(title: $title) {
          title
        }
      }
    `)
  
  const res = await apolloClient.query({
    query,
    variables: { title }
  })
  
  return {
    props: {
      books: res.data
    }
  }
}


export default bookContainers.bookDetail
