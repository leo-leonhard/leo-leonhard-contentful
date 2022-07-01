import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'


const LebenslaufPage = ( { data } ) => (
    <Layout>
      <Banner image={data.allContentfulPageBanner.nodes}/>
    </Layout>
)

export const query = graphql`
query getLebenslaufContent {
  allContentfulPageBanner(filter: {slug: {eq: "lebenslauf"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
}
`


export default LebenslaufPage
