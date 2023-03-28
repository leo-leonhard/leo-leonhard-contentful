import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { SEO } from '../components/Seo'

import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxPage'

export default function DialogVerehrtenAltenMeistern({ data }) {
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
    query ShowCaseBoxQueryDialog {
        allContentfulShowcaseBox(
            filter: { slug: { eq: "dialog-mit-den-verehrten-alten-meistern" } }
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
export const Head = () => <SEO title="Dialog Verehrten Alten Meistern" />
