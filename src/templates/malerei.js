import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

export default function MalreiTemplate({ data }) {
    const picture = data.allContentfulMalereiImages.nodes

    return (
        <Layout>
            {picture.map((pic) => {
                const image = getImage(pic.image)
                return (
                    <div key={pic.slug} className="mb-3 standard-layout-width">
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
        allContentfulMalereiImages(
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
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
        }
    }
`
