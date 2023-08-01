import * as React from 'react'
import { graphql } from 'gatsby'

import '../styles/index.css'
import Layout from '../components/Layout'
import IntroText from '../components/IntroText'
// import NextExpoSlider from '../components/slider/NextExpoSlider'
import PflasterBanner from '../components/PflasterBanner'
import CapriccioBanner from '../components/CapriccioBanner'
import ShowCaseBox from '../components/showCaseBox/ShowCaseBox'
import Slidy from '../components/slick/Slick'
import NewsLetter from '../components/newsletter/NewsLetter'
import { SEO } from '../components/Seo'
// TODO: check the graphql, many things not being used

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <div id="banner-container" className="standard-layout-width">
                <Slidy />
            </div>

            <div className="standard-layout-width card-style">
                <IntroText introdata={data.banner.nodes} />
            </div>

            {/*     <div className="standard-layout-width slider-container">
                <NextExpoSlider />
            </div> */}

            <div className="container-wider">
                {/* <PflasterBanner image={data.imitation.nodes} /> */}
                <PflasterBanner />
            </div>

            <div className="standard-layout-width">
                <ShowCaseBox image={data.showcase.nodes} />
            </div>

            <div className="container-wider">
                <CapriccioBanner image={data.capriccio.nodes} />
            </div>

            <div className="card-style standard-layout-width">
                <NewsLetter />
            </div>
        </Layout>
    )
}

export const Head = () => <SEO />

export const query = graphql`
    query IntroTextQuery {
        banner: allContentfulIntroText(filter: { slug: { eq: "index" } }) {
            nodes {
                header
                page
                text {
                    childMdx {
                        body
                    }
                }
            }
        }
        imitation: allContentfulBannerImage(
            filter: { slug: { eq: "imitation-geprägt-von-hochachtung" } }
        ) {
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
        capriccio: allContentfulBannerImage(
            filter: { slug: { eq: "capriccio-an-der-autobahn" } }
        ) {
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
        showcase: allContentfulShowcaseBox {
            nodes {
                id
                slug
                header
                text {
                    childMdx {
                        body
                        excerpt(pruneLength: 80)
                    }
                }
                image {
                    gatsbyImageData(width: 525, placeholder: BLURRED)
                }
            }
        }
    }
`

export default IndexPage
