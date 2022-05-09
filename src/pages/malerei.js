import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import IntroText from '../components/IntroText'

const MalereiPage = ( { data } ) => (
    <Layout>
      <Banner image={data.allContentfulBannerImage.nodes}/>
      <IntroText introdata={data.allContentfulIntroText.nodes}/>
    </Layout>
)

export const query = graphql`
query getMalereiContent {
  allContentfulBannerImage(filter: {slug: {eq: "malerei"}}) {
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
          allContentfulIntroText(filter: {slug: {eq: "malerei"}}) {
            nodes {
              id
              slug
              header
              page
              text {
                childMdx {
                  body
                }
             }
          }
        }

}


`


export default MalereiPage
