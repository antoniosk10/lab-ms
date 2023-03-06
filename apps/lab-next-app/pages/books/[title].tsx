import { bookContainers } from '@pages/book'
import { apolloClient } from '@src/api/apollo-client'
import { gql } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'
import getLabLayout from '@src/layouts/getLabLayout'
import LabLayout from '@src/layouts/LabLayout'

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


bookContainers.bookDetail.getLayout = (page) => {
  return <LabLayout>
    {getLabLayout(page)}
  </LabLayout>
}

export default bookContainers.bookDetail
