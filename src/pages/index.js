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

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <div id="banner-container" className="standard-layout-width">
                <Slidy />
            </div>
            <div className="standard-layout-width card-style">
                <IntroText introdata={data.introTextHome.nodes} />
            </div>
            {/*     <div className="standard-layout-width slider-container">
                <NextExpoSlider />
            </div> */}
            <div
                className="container-wider"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <PflasterBanner />
            </div>
            <div className="standard-layout-width">
                <ShowCaseBox items={data.showcase.nodes} />
            </div>
            <div className="container-wider">
                <CapriccioBanner items={data.capriccio.nodes} />
            </div>
            <div className="card-style standard-layout-width">
                <NewsLetter />
            </div>
        </Layout>
    )
}

export const Head = () => <SEO />

export const query = graphql`
    query mainPageQuery {
        capriccio: allContentfulPages(
            filter: {
                title: { eq: "Capriccio an der Autobahn" }
                node_locale: { eq: "de-DE" }
            }
        ) {
            nodes {
                id
                title
                desc {
                    childMdx {
                        body
                    }
                }
                mainImage {
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                    title
                }
            }
        }
        introTextHome: allContentfulIntroText(
            filter: {
                node_locale: { eq: "de-DE" }
                slug: { eq: "home-meisters" }
            }
        ) {
            nodes {
                introtextHome
                id
                content {
                    childMdx {
                        body
                    }
                }
            }
        }
        showcase: allContentfulPages(
            filter: { node_locale: { eq: "de-DE" }, category: { eq: "blog" } }
        ) {
            nodes {
                id
                title
                slug
                desc {
                    childMdx {
                        body
                        excerpt(pruneLength: 80)
                    }
                }
                mainImage {
                    gatsbyImageData(width: 525, placeholder: BLURRED)
                    title
                }
            }
        }
    }
`

export default IndexPage

/* 
export const query = graphql`
    query IntroTextQuery {
        
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
    }
` */
