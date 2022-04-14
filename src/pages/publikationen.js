import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'


const PublikationenPage = ( { data } ) => (
  <Layout>
  <Banner image={data.allContentfulBannerImage.nodes}/>
  </Layout>
)

export const query = graphql`
query getPublikationenContent {
  allContentfulBannerImage(filter: {slug: {eq: "publikationen"}}) {
    nodes {
      slug
      image {
        id
        resize(width: 1200) {
          width
          height
          src
        }
      }
    }
  }
}
`

export default PublikationenPage
