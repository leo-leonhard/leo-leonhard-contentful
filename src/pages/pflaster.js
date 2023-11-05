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
                    const image = getImage(item.secondaryImage)
                    return (
                        <div key={item.id}>
                            <h1 className="single-title">{item.title}</h1>
                            <p className="single-description">
                                <MDXProvider>
                                    <MDXRenderer>
                                        {item.desc.childMdx.body}
                                    </MDXRenderer>
                                </MDXProvider>
                            </p>
                            <div className="gallery-single-page">
                                <div className="single-container-image">
                                    <GatsbyImage
                                        className="gallery-single-page-img"
                                        image={image}
                                    />
                                </div>
                            </div>
                            <div className="single-text">
                                <MDXProvider>
                                    <MDXRenderer>
                                        {item.content.childMdx.body}
                                    </MDXRenderer>
                                </MDXProvider>
                            </div>
                        </div>
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
                secondaryImage {
                    gatsbyImageData(placeholder: BLURRED, width: 800)
                }
            }
        }
    }
`

export const Head = () => <SEO />
