import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Layout from '../components/Layout'
import { SEO } from '../components/Seo'

export default function Lebensstationen({ data }) {
    return (
        <Layout>
            <div style={{ background: '#F8F3EA', padding: '3em 0' }}>
                <div style={{ width: '60%', margin: '0 auto' }}>
                    <div style={{ margin: '0 auto' }}>
                        <div className="mb-5">
                            <h2>LEBENSSTATIONEN</h2>
                            <h2>LEO LEONHARD</h2>
                            <h2>1939 - 2011</h2>
                            <hr
                                style={{ width: '20%', margin: '3em 0 1em 0' }}
                            />
                        </div>
                        <div className="mt-4  d-flex flex-column">
                            {data.allContentfulLebensstationen.nodes.map(
                                (entry) => (
                                    <div
                                        key={entry.id}
                                        style={{
                                            fontSize: '0.9em',
                                            width: '40%'
                                        }}
                                    >
                                        <p className="fett">{entry.year}</p>
                                        <p style={{ marginTop: '-1em' }}>
                                            <MDXProvider>
                                                <MDXRenderer>
                                                    {entry.event.childMdx.body}
                                                </MDXRenderer>
                                            </MDXProvider>
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query getLebensstationenContent {
        allContentfulLebensstationen(
            filter: {
                node_locale: { eq: "de-DE" }
                category: { eq: "LEBENSSTATIONEN" }
            }
            sort: { fields: year, order: ASC }
        ) {
            nodes {
                id
                year
                event {
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`
export const Head = () => <SEO />
