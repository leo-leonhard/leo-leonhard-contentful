import * as React from 'react'
import { graphql } from 'gatsby'

import '../styles/index.css'
import Layout from '../components/Layout'
import IntroText from '../components/IntroText'
import Banner from '../components/Banner'
import ShowCaseBox from '../components/showCaseBox/ShowCaseBox'
import Slidy from '../components/Slick'
import NewsLetter from '../components/newsletter/NewsLetter'

// TODO: check the graphql, many things not being used

const IndexPage = ({ data }) => {
    return (
        <Layout>
            {/* slider */}
            <div id="banner-container" className="standard-layout-width">
                <Slidy />
            </div>

            {/* text */}
            <div className="standard-layout-width card-style">
                <IntroText introdata={data.allContentfulIntroText.nodes} />
            </div>

            {/* pagina pflaster */}
            <div className="standard-layout-width">
                <Banner image={data.allContentfulBannerImage.nodes} />
            </div>

            {/* showcase box */}
            <div className="standard-layout-width">
                <ShowCaseBox />
            </div>

            {/* image band */}
            <div>
                <div className="image-band"></div>
            </div>

            {/* NewsLetter */}
            <div className="card-style standard-layout-width">
                <NewsLetter />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query IntroTextQuery {
        allContentfulGrafik(limit: 3) {
            nodes {
                year
                slug
                width
                type
                title
                id
                height
                image {
                    gatsbyImageData(width: 260)
                }
            }
        }
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
        allContentfulIntroText(filter: { slug: { eq: "index" } }) {
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
