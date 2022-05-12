import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import IntroText from '../components/IntroText'
import KunstWerk from '../components/KunstWerk'


const MalereiPage = ( { data } ) => (
    <Layout>
      <Banner image={data.allContentfulBannerImage.nodes}/>
      <IntroText introdata={data.allContentfulIntroText.nodes}/>
      <div className="mb-5">
        <hr />
      </div>
      <div className="d-flex flex-wrap" style={{width: "100%"}}>
        <div style={{width: "100%", marginBottom: "2em"}}>
          <KunstWerk kunstwerk={data.allContentfulMalerei.nodes}/>
        </div>
      </div>
    </Layout>
)



export const query = graphql`
query getMalereiContent {
  allContentfulBannerImage(filter: {slug: {eq: "malerei"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
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
  allContentfulMalerei {
    nodes {
      year
      width
      type
      title
      id
      height
      description {
        childMdx {
          body
        }
      }
      image {
        gatsbyImageData(width: 240)
      }
    }
  }
}
`


export default MalereiPage
