import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { SEO } from '../components/Seo'

import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxPage'

export default function Frühwerk({ data }) {
    const myNodes = data.fruehwerk.nodes
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
    query ShowCaseBoxQueryFruehwerk {
        fruehwerk: allContentfulPages(
            filter: {
                slug: { eq: "das-fruehwerk" }
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
