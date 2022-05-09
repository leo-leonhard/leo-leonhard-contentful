import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import IntroText from '../components/IntroText'

const GrafikPage = ( { data } ) => {
    const grafiken = data.allContentfulGrafik.nodes
    return(
        <Layout>
          <Banner image={data.allContentfulBannerImage.nodes}/>
          <div className="d-flex flex-wrap" style={{width: "100%"}}>
            {grafiken.map(grafik => {
                const image = getImage(grafik.image)
                return(
                    <div>
                      <GatsbyImage image={image} alt={grafik.title}/>
                      <IntroText introdata={data.allContentfulIntroText.nodes}/>
                    </div>
                )
            })}
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
      image {
        gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
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
