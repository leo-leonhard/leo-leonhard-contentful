import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { SEO } from '../components/Seo'

import Layout from '../components/Layout'

export default function Auszeichnungen({ data }) {
    return (
        <Layout>
            <div style={{ width: '60%', margin: '0 auto 3em auto' }}>
                <h2>AUSZEICHNUNGEN</h2>
                <hr style={{ width: '20%', margin: '3em 0 1em 0' }} />
                <div>
                    {data.allContentfulAuszeichnung.nodes.map((award) => (
                        <div>
                            <p className="fett">{award.year}</p>
                            <MDXProvider>
                                <MDXRenderer>
                                    {award.auszeichnungen.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query auszeichnungenContent {
        allContentfulAuszeichnung(sort: { fields: year, order: ASC }) {
            nodes {
                year
                auszeichnungen {
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`
export const Head = () => <SEO title="Auszeichnungen" />
