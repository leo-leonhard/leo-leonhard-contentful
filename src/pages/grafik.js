import React from 'react'
import { graphql } from 'gatsby'

import { SEO } from '../components/Seo'

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Zeichnungen from '../components/ArtWork/Grafik/Zeichnungen'
import ZeichnungenText from '../components/ArtWork/Grafik/ZeichnungenText'
import Radierungen from '../components/ArtWork/Grafik/Radierungen'
import RadierungenText from '../components/ArtWork/Grafik/RadierungenText'
import HolzschnitteText from '../components/ArtWork/Grafik/HolzschnitteText'
import Holzschnitte from '../components/ArtWork/Grafik/Holzschnitte'
import LithographieText from '../components/ArtWork/Grafik/LithographieText'
import Lithographie from '../components/ArtWork/Grafik/Lithographie'
import MappenwerkeText from '../components/ArtWork/Grafik/MappenwerkeText'
import Mappenwerke from '../components/ArtWork/Grafik/Mappenwerke'

export default function GrafikPage({ data }) {
    // console.log(data)
    return (
        <Layout>
            <section className="standard-layout-width">
                <PageBanner image={data.allContentfulPageBanner.nodes} />
                <IntroText introdata={data.allContentfulIntroText.nodes} />

                {/* 
            * //TODO:
            * to being implemented 
            * add to the graphql this opction to sort the nodes: { fields: order, order: ASC }
            <ArtworkTemplate data={data.allContentfulDescriptionText.nodes} />
            */}

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="zeichnungen">
                    <ZeichnungenText data={data.zeichnungenNodes.nodes} />
                    <Zeichnungen />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="radierungen">
                    <RadierungenText data={data.radierungenNodes.nodes} />
                    <Radierungen />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="holzschnitte">
                    <HolzschnitteText data={data.holzschnitteNodes.nodes} />
                    <Holzschnitte />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="lithographie">
                    <LithographieText data={data.lithographieNodes.nodes} />
                    <Lithographie />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="mappenwerke">
                    <MappenwerkeText data={data.mappenwerkeNodes.nodes} />
                    <Mappenwerke />
                </div>
            </section>
        </Layout>
    )
}

// TODO: need to simlify: DRY
export const query = graphql`
    query getGrafikContentWerkeDeutschen {
        allContentfulPageBanner(filter: { slug: { eq: "grafik" } }) {
            nodes {
                slug
                image {
                    id
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
        allContentfulIntroText(filter: { slug: { eq: "grafik" } }) {
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
        zeichnungenNodes: allContentfulDescriptionText(
            filter: { slug: { eq: "zeichnungen" } }
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
        radierungenNodes: allContentfulDescriptionText(
            filter: { slug: { eq: "radierungen" } }
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
        holzschnitteNodes: allContentfulDescriptionText(
            filter: { slug: { eq: "holzschnitte" } }
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
        lithographieNodes: allContentfulDescriptionText(
            filter: { slug: { eq: "lithographie" } }
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
        mappenwerkeNodes: allContentfulDescriptionText(
            filter: { slug: { eq: "mappenwerke" } }
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

export const Head = () => <SEO title="Grafik" />
