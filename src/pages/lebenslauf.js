import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'


const LebenslaufPage = ( { data } ) => (
    <Layout>
      <Banner image={data.allContentfulBannerImage.nodes}/>
    </Layout>
)

export const query = graphql`
query getLebenslaufContent {
  allContentfulBannerImage(filter: {slug: {eq: "lebenslauf"}}) {
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


export default LebenslaufPage
