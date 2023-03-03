import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Oelgemaelde from '../components/ArtWork/Malerei/Oelgemaelde'
import OelgemaeldeText from '../components/ArtWork/Malerei/OelgemaeldeText'
import Aquarelle from '../components/ArtWork/Malerei/Aquarelle'
import AquarelleText from '../components/ArtWork/Malerei/AquarelleText'

export default function MalereiPage({ data }) {
    return (
        <Layout>
            <section className="standard-layout-width">
                <PageBanner image={data.allContentfulPageBanner.nodes} />

                <IntroText introdata={data.allContentfulIntroText.nodes} />

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="oelgemaelde">
                    <OelgemaeldeText data={data.oelgemaeldeNodes.nodes} />
                    <Oelgemaelde />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="aquarelle">
                    <AquarelleText data={data.aquarelleNodes.nodes} />
                    <Aquarelle />
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query getMalereiContent {
        allContentfulPageBanner(filter: { slug: { eq: "malerei" } }) {
            nodes {
                slug
                image {
                    id
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
        allContentfulIntroText(filter: { slug: { eq: "malerei" } }) {
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
        aquarelleNodes: allContentfulDescriptionText(
            filter: { slug: { eq: "aquarelle" } }
        ) {
            nodes {
                id
                slug
                header
                page
                description {
                    id
                    childMdx {
                        body
                    }
                }
            }
        }
        oelgemaeldeNodes: allContentfulDescriptionText(
            filter: { slug: { eq: "oelgemaelde" } }
        ) {
            nodes {
                id
                slug
                header
                page
                description {
                    id
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`
