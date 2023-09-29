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
                <PageBanner image={data.headerText.nodes} />
                <IntroText introdata={data.headerText.nodes} />

                <div className="mt-5 mb-5">
                    <hr />
                </div>
                <div id="zeichnungen">
                    <ZeichnungenText data={data.textGrafik.nodes} />
                    <Zeichnungen />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="radierungen">
                    <RadierungenText data={data.textGrafik.nodes} />
                    <Radierungen />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="holzschnitte">
                    <HolzschnitteText data={data.textGrafik.nodes} />
                    <Holzschnitte />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="lithographie">
                    <LithographieText data={data.textGrafik.nodes} />
                    <Lithographie />
                </div>

                <div className="mt-5 mb-5">
                    <hr />
                </div>

                <div id="mappenwerke">
                    <MappenwerkeText data={data.textGrafik.nodes} />
                    <Mappenwerke />
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query getGrafikContentWerkeDeutschen {
        headerText: allContentfulIntroText(
            filter: {
                slug: { eq: "das-grafische-werk" }
                node_locale: { eq: "de-DE" }
            }
        ) {
            nodes {
                id
                slug
                introtextHome
                content {
                    childMdx {
                        body
                    }
                }
                id
                image {
                    gatsbyImageData
                }
            }
        }
        textGrafik: allContentfulGrafik(
            filter: {
                slug: { eq: "das-grafische-werk" }
                node_locale: { eq: "de-DE" }
            }
        ) {
            nodes {
                id
                holzschnitteHead
                holzschnitteHeadDesc {
                    childMdx {
                        body
                    }
                }
                lithographieHead
                lithographieDesc {
                    childMdx {
                        body
                    }
                }
                mappenwerkHead
                mappenwerkeDesc {
                    childMdx {
                        body
                    }
                }
                radierungenHead
                radierungenDesc {
                    childMdx {
                        body
                    }
                }
                slug
                zeichnungenHead
                zeichnungenHeadDesc {
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`

export const Head = () => <SEO title="Grafik" />
