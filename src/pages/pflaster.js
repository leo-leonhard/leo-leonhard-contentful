import React from 'react'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { SEO } from '../components/Seo'

import Layout from '../components/Layout'
import '../styles/single-page-style.css'

export default function PflasterPage({ data }) {
    const items = data.pflasterNodes.nodes
    return (
        <Layout>
            <section className="standard-layout-width">
                {items.map((item) => {
                    return (
                        <>
                            <h1 className="single-title">{item.title}</h1>
                            <p className="single-description">
                                <MDXProvider>
                                    <MDXRenderer>
                                        {item.desc.childMdx.body}
                                    </MDXRenderer>
                                </MDXProvider>
                            </p>

                            <div className="gallery-single-page">
                                {item.contentImages.map((elem) => {
                                    const image = getImage(elem)
                                    return (
                                        <div
                                            key={elem.id}
                                            className="single-container-image"
                                        >
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
        pflasterNodes: allContentfulPages(
            filter: {
                slug: { eq: "imitation-gepraegt-von-hochachtung" }
                node_locale: { eq: "de-DE" }
            }
        ) {
            nodes {
                id
                title
                desc {
                    childMdx {
                        body
                    }
                }
                content {
                    childMdx {
                        body
                    }
                }
                contentImages {
                    id
                    gatsbyImageData(placeholder: BLURRED, width: 800)
                }
            }
        }
    }
`

export const Head = () => <SEO />
