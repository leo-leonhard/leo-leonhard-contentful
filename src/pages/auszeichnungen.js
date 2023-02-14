import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import p from '../assets/images/p.png'

export default function Auszeichnungen({ data }) {
    return (
        <>
            <NavBar />
            <div style={{ width: '75%', margin: '0 auto' }}>
                <img
                    className="mb-5"
                    alt="text"
                    src={p}
                    style={{
                        width: '100%',
                        height: '80vh',
                        objectFit: 'cover'
                    }}
                />
            </div>
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
            <Footer />
        </>
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
