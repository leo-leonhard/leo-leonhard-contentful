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
              <div style={{background: "#BFD8E5"}}>
                <h2>DIE GRAFISCHEN MAPPENWERKE</h2>
                <div>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.
            </div>
              </div>
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
                title
                text {
                  childMdx {
                    body
                  }
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
