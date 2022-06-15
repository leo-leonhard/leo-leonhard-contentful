import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Slidy from '../components/Slick'
import IntroText from '../components/IntroText'
//import ShowCaseBox from '../components/ShowCaseBox'

import '../styles/index.css'



const IndexPage = ({ data }) => {
    return (
        <Layout>
            <div>
              <Slidy/>
              <IntroText introdata={data.allContentfulIntroText.nodes}/>
              {/* <ShowCaseBox/> */}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query IntroTextQuery {
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
