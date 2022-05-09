import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import IntroText from '../components/IntroText'
import KunstWerk from '../components/KunstWerk'

const GrafikPage = ( { data } ) => {
    return(
        <Layout>
          <Banner image={data.allContentfulBannerImage.nodes}/>
          <IntroText introdata={data.allContentfulIntroText.nodes}/>
          <div className="mb-5">
            <h1 className="">Das Zeichnerische Werk</h1>
            <hr />
          </div>
          <div className="d-flex flex-wrap" style={{width: "100%"}}>
        <div style={{width: "100%", marginBottom: "2em"}}>
              <KunstWerk kunstwerk={data.allContentfulGrafik.nodes}/>
            </div>
          </div>
        </Layout>
    )
}

export const query = graphql`
query getGrafikContent {
  allContentfulBannerImage(filter: {slug: {eq: "grafik"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
 allContentfulGrafik {
    nodes {
      id
      year
      title
      type
      description {
        childMdx {
          body
        }
}
      width
      height
      image {
        gatsbyImageData(width: 240, placeholder: DOMINANT_COLOR)
      }
    }
  }
          allContentfulIntroText(filter: {slug: {eq: "grafik"}}) {
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


export default GrafikPage
