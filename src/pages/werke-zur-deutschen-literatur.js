import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxPage'

export default function Werke({ data }) {
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
    query ShowCaseBoxQuery {
        allContentfulShowcaseBox(
            filter: { slug: { eq: "werke-zur-deutschen-literatur" } }
        ) {
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
