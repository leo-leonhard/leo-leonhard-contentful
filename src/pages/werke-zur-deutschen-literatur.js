import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxPage'
import { SEO } from '../components/Seo'

export default function Werke({ data }) {
    const myNodes = data.werke.nodes
    return (
        <Layout>
            {myNodes.map((item) => {
                const image = getImage(item.secondaryImage)
                return (
                    <Template
                        key={item.slug}
                        alt={item.title}
                        src={image}
                        text={item.content.childMdx.body}
                    />
                )
            })}
        </Layout>
    )
}
export const query = graphql`
    query ShowCaseBoxQueryWerke {
        werke: allContentfulPages(
            filter: {
                slug: { eq: "werke-zur-deutschen-literatur" }
                node_locale: { eq: "de-DE" }
            }
        ) {
            nodes {
                id
                slug
                title
                mainImage {
                    gatsbyImageData
                }
                contentImages {
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
                secondaryImage {
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
                content {
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`
export const Head = () => <SEO />
