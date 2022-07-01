import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Slidy from '../components/Slick'
import IntroText from '../components/IntroText'
import ShowCaseBox from '../components/ShowCaseBox'

import Banner from '../components/Banner.js'

import '../styles/index.css'


const IndexPage = ({ data }) => {

    return (
        <Layout>
            <div className="d-flex flex-column">
              <Slidy/>
              <IntroText introdata={data.allContentfulIntroText.nodes}/>
              <Banner image={data.allContentfulBannerImage.nodes}/>
              <ShowCaseBox/>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query IntroTextQuery {
        allContentfulBannerImage {
            nodes {
                image {
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
          allContentfulIntroText(filter: {slug: {eq: "index"}}) {
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

export default IndexPage
