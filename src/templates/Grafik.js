import React from 'react'
import { graphql, Link } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

export default function GrafikTemplate({ data }) {
    /* const data = useStaticQuery(graphql`
        query ($slug: String!) {
            allContentfulGrafikImages(
                filter: { node_locale: { eq: "de-DE" }, slug: { eq: $slug } }
            ) {
                nodes {
                    year
                    title
                    category
                    description {
                        childMdx {
                            body
                        }
                    }
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                }
            }
        }
    `) */
    const grafikData = data.allContentfulGrafikImages.nodes

    return (
        <Layout>
            {grafikData.map((pic) => {
                // eslint-disable-next-line no-console
                console.log(pic)
                const image = getImage(pic.image)
                return (
                    <div key={pic.slug} className="mb-3 standard-layout-width">
                        <div className="pt-3 d-flex justify-content-between">
                            <span>
                                <Link
                                    to="/grafik"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#589AAD'
                                    }}
                                >
                                    &#8592; zurück
                                </Link>
                            </span>
                        </div>
                        <hr />

                        <div className="artwork-detail-container">
                            <div className="artwork-detail-image-container">
                                <GatsbyImage image={image} />
                            </div>

                            <div className="artwork-detail-text">
                                <h3>
                                    <em>{pic.title}</em>
                                </h3>

                                <h3>{pic.year}</h3>

                                <h4>{pic.category}</h4>
                                {pic.description ? (
                                    <p>
                                        <MDXProvider>
                                            <MDXRenderer>
                                                {pic.description.childMdx.body}
                                            </MDXRenderer>
                                        </MDXProvider>
                                    </p>
                                ) : (
                                    <p></p>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </Layout>
    )
}

export const query = graphql`
    query ($slug: String!) {
        allContentfulGrafikImages(
            filter: { node_locale: { eq: "de-DE" }, slug: { eq: $slug } }
        ) {
            nodes {
                year
                title
                category
                description {
                    childMdx {
                        body
                    }
                }
                image {
                    gatsbyImageData(width: 800, placeholder: BLURRED)
                }
            }
        }
    }
`
