import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { SEO } from '../components/Seo'

import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxPage'

export default function Frühwerk({ data }) {
    const myNodes = data.allContentfulShowcaseBox.nodes
    return (
        <Layout>
            {myNodes.map((item) => {
                const image = getImage(item.image)
                return (
                    <Template
                        key={item.slug}
                        alt={item.header}
                        src={image}
                        text={item.text.childMdx.body}
                    />
                )
            })}
        </Layout>
    )
}
export const query = graphql`
    query ShowCaseBoxQueryFruehwerk {
        allContentfulShowcaseBox(filter: { slug: { eq: "das-fruehwerk" } }) {
            nodes {
                id
                slug
                header
                text {
                    childMdx {
                        body
                    }
                }
                image {
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
    }
`
export const Head = () => <SEO />
