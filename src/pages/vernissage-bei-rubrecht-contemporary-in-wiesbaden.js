import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxPage'
import { SEO } from '../components/Seo'

export default function VernissageRubrechtContemporaryWiesbaden({ data }) {
    const myNodes = data.Rubrecht.nodes
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
                        title={item.title}
                    />
                )
            })}
        </Layout>
    )
}

export const Head = () => <SEO />

export const query = graphql`
    query ShowCaseBoxQueryVersissageRubrecht {
        Rubrecht: allContentfulPages(
            filter: {
                slug: {
                    eq: "vernissage-bei-rubrecht-contemporary-in-wiesbaden"
                }
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
