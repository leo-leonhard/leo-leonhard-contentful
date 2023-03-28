import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { SEO } from '../components/Seo'

import Layout from '../components/Layout'
import '../styles/single-page-style.css'

export default function PflasterPage({ data }) {
    const pflasterNodes = data.pflasterNodes.nodes

    // TODO
    // need to be componetized this page and the capriccio

    return (
        <Layout>
            <section className="standard-layout-width">
                {pflasterNodes.map((item) => {
                    return (
                        <>
                            <h1 className="single-title">{item.title}</h1>
                            <p className="single-description">
                                {item.description}
                            </p>

                            <div className="gallery-single-page">
                                {item.images.map((elem) => {
                                    const image = getImage(elem)
                                    return (
                                        <div className="single-container-image">
                                            <GatsbyImage
                                                className="gallery-single-page-img"
                                                image={image}
                                            />

                                            {elem.description === '' ? (
                                                <p className="single-descr-image">
                                                    &nbsp;
                                                </p>
                                            ) : (
                                                <p className="single-descr-image">
                                                    {elem.description}
                                                </p>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="single-text">
                                <MDXProvider>
                                    <MDXRenderer>
                                        {item.content.childMdx.body}
                                    </MDXRenderer>
                                </MDXProvider>
                            </div>
                        </>
                    )
                })}
            </section>
        </Layout>
    )
}

export const query = graphql`
    query getContentPflaster {
        pflasterNodes: allContentfulUniquePage(
            filter: { slug: { eq: "pflaster" } }
        ) {
            nodes {
                title
                description
                content {
                    childMdx {
                        body
                    }
                }
                images {
                    gatsbyImageData(placeholder: BLURRED)
                    description
                }
            }
        }
    }
`

export const Head = () => <SEO />
