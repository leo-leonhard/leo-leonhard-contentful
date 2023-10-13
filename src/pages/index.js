import * as React from 'react'
import { graphql } from 'gatsby'

import '../styles/index.css'
import Layout from '../components/Layout'
import IntroText from '../components/IntroText'
import ShowCaseBox from '../components/showCaseBox/ShowCaseBox'
import HomeBanner from '../components/HomeBanner'
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
            <div className="container-wider">
                <HomeBanner items={data.pflaster.nodes} linkItem="/pflaster" />
            </div>
            <div className="standard-layout-width">
                <ShowCaseBox items={data.showcase.nodes} />
            </div>
            <div className="container-wider">
                <HomeBanner
                    items={data.capriccio.nodes}
                    linkItem="/capriccio"
                />
            </div>
            <div className="card-style standard-layout-width">
                <NewsLetter />
            </div>
        </Layout>
    )
}

export const Head = () => <SEO title="Leo-leonhard" />

export const query = graphql`
    query mainPageQuery {
        capriccio: allContentfulPages(
            filter: {
                slug: { eq: "capriccio-an-der-Autobahn" }
                node_locale: { eq: "de-DE" }
            }
        ) {
            nodes {
                id
                slug
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
        pflaster: allContentfulPages(
            filter: {
                slug: { eq: "imitation-gepraegt-von-hochachtung" }
                node_locale: { eq: "de-DE" }
            }
        ) {
            nodes {
                id
                slug
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
