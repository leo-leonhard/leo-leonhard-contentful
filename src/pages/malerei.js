import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Oelgemaelde from '../components/ArtWork/Malerei/Oelgemaelde'
import OelgemaeldeText from '../components/ArtWork/Malerei/OelgemaeldeText'
import Aquarelle from '../components/ArtWork/Malerei/Aquarelle'
import AquarelleText from '../components/ArtWork/Malerei/AquarelleText'
import { SEO } from '../components/Seo'

export default function MalereiPage({ data }) {
    return (
        <Layout>
            <section className="standard-layout-width">
                <PageBanner image={data.headerMalerei.nodes} />
                <IntroText introdata={data.headerMalerei.nodes} />
                <div className="mt-5 mb-5">
                    <hr />
                </div>
                <div id="oelgemaelde">
                    <OelgemaeldeText data={data.textMalerei.nodes} />
                </div>
                ? <Oelgemaelde />
                <div className="mt-5 mb-5">
                    <hr />
                </div>
                <div id="aquarelle">
                    <AquarelleText data={data.textMalerei?.nodes} />
                    <Aquarelle />
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query getMalereiContent {
        headerMalerei: allContentfulIntroText(
            filter: {
                slug: { eq: "von-der-kunstgeschichte-in-die-gegenwart" }
                node_locale: { eq: "de-DE" }
            }
        ) {
            nodes {
                content {
                    childMdx {
                        body
                    }
                }
                image {
                    gatsbyImageData
                }
                introtextHome
            }
        }
        textMalerei: allContentfulMalerei(
            filter: { node_locale: { eq: "de-DE" } }
        ) {
            nodes {
                id
                aquarelleHead
                aquarelleDesc {
                    childMdx {
                        body
                    }
                }
                OelgemaeldeHead
            }
        }
    }
`
export const Head = () => <SEO />
