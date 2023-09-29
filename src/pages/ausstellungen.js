import React from 'react'
import { graphql } from 'gatsby'

import NavBar from '../components/NavBar'
import Footer from '../components/footer/Footer'
import { SEO } from '../components/Seo'

export default function Ausstellungen({ data }) {
    return (
        <>
            <NavBar />
            <div style={{ width: '75%', margin: '1em auto 3em auto' }}>
                <h2>EINZELAUSSTELLUNGEN</h2>
                <hr style={{ width: '20%', margin: '3em 0 1em 0' }} />

                <section className="d-flex justify-content-between">
                    <div>
                        <div
                            style={{
                                width: '30%'
                            }}
                        >
                            <h3
                                className="mt-2 mb-4"
                                style={{ color: '#589AAD' }}
                            >
                                1966 -1979
                            </h3>
                            <div
                                className="d-flex flex-column"
                                style={{
                                    flexFlow: 'wrap'
                                }}
                            >
                                {data.firstzeit.nodes.map((items) => (
                                    <div
                                        key={items.id}
                                        className="mb-3"
                                        style={{
                                            fontSize: '0.9em'
                                        }}
                                    >
                                        <p style={{ margin: '0' }}>
                                            {items.year}
                                        </p>

                                        <p style={{ margin: '0' }}>
                                            {items.event.childMdx.excerpt}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <hr style={{ width: '20%' }} />
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                width: '30%'
                            }}
                        >
                            <h3
                                className="mt-2 mb-4"
                                style={{ color: '#589AAD' }}
                            >
                                1980 -1999
                            </h3>
                            <div
                                className="d-flex flex-column"
                                style={{
                                    flexFlow: 'wrap'
                                }}
                            >
                                {data.secondzeit.nodes.map((items) => (
                                    <div
                                        key={items.id}
                                        className="mb-3"
                                        style={{
                                            fontSize: '0.9em'
                                        }}
                                    >
                                        <p style={{ margin: '0' }}>
                                            {items.year}
                                        </p>

                                        <p style={{ margin: '0' }}>
                                            {items.event.childMdx.excerpt}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <hr style={{ width: '20%' }} />
                        </div>
                    </div>

                    <div>
                        <div
                            style={{
                                width: '30%'
                            }}
                        >
                            <h3
                                className="mt-2 mb-4"
                                style={{ color: '#589AAD' }}
                            >
                                2000 -2011
                            </h3>
                            <div
                                className="d-flex flex-column"
                                style={{
                                    flexFlow: 'wrap'
                                }}
                            >
                                {data.thirdzeit.nodes.map((items) => (
                                    <div
                                        key={items.id}
                                        className="mb-3"
                                        style={{
                                            fontSize: '0.9em'
                                        }}
                                    >
                                        <p style={{ margin: '0' }}>
                                            {items.year}
                                        </p>

                                        <p style={{ margin: '0' }}>
                                            {items.event.childMdx.excerpt}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <hr style={{ width: '20%' }} />
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export const query = graphql`
    query ausstellungenData {
        firstzeit: allContentfulLebensstationen(
            filter: {
                node_locale: { eq: "de-DE" }
                category: { eq: "1966 -1979" }
            }
            sort: { fields: year, order: ASC }
        ) {
            nodes {
                id
                year
                event {
                    childMdx {
                        excerpt
                    }
                }
                category
            }
        }

        secondzeit: allContentfulLebensstationen(
            filter: {
                node_locale: { eq: "de-DE" }
                category: { eq: "1980 -1999" }
            }
            sort: { fields: year, order: ASC }
        ) {
            nodes {
                id
                year
                event {
                    childMdx {
                        excerpt
                    }
                }
                category
            }
        }

        thirdzeit: allContentfulLebensstationen(
            filter: {
                node_locale: { eq: "de-DE" }
                category: { eq: "2000 -2011" }
            }
            sort: { fields: year, order: ASC }
        ) {
            nodes {
                id
                year
                event {
                    childMdx {
                        excerpt
                    }
                }
                category
            }
        }
    }
`
export const Head = () => <SEO />
