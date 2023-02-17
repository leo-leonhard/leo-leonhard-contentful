import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

export default function MalreiTemplate({ data }) {
    const picture = data.allContentfulMalerei.nodes

    return (
        <Layout>
            {picture.map((pic) => {
                const image = getImage(pic.image)
                return (
                    <div key={pic.slug} className="mb-3">
                        <div className="pt-3 d-flex justify-content-between">
                            <span>
                                <Link
                                    to="/malerei"
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
                        <div className="artwork-detail-container ">
                            <div className="artwork-detail-image-container">
                                <GatsbyImage image={image} />
                            </div>
                            <div className="artwork-detail-text">
                                <h3>{pic.title}</h3>
                                <h3>{pic.year}</h3>
                                <h4>{pic.type}</h4>
                                <p className="pt-4">
                                    <MDXProvider>
                                        <MDXRenderer>
                                            {pic.description.childMdx.body}
                                        </MDXRenderer>
                                    </MDXProvider>
                                </p>
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
        allContentfulMalerei(filter: { slug: { eq: $slug } }) {
            nodes {
                year
                width
                title
                description {
                    childMdx {
                        body
                    }
                }
                image {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
        }
    }
`
