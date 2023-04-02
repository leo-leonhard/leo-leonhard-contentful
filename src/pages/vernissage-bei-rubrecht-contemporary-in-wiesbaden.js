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
                const image = getImage(item.image)
                const newgallery = item.gallery
                return (
                    <Template
                        key={item.slug}
                        alt={item.header}
                        src={image}
                        gallery={newgallery}
                        text={item.text.childMdx.body}
                        title={item.header}
                    />
                )
            })}
        </Layout>
    )
}
export const query = graphql`
    query ShowCaseBoxQueryVersissageRubrecht {
        Rubrecht: allContentfulShowcaseBox(
            filter: {
                slug: {
                    eq: "vernissage-bei-rubrecht-contemporary-in-wiesbaden"
                }
            }
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
                    gatsbyImageData(placeholder: BLURRED)
                }
                gallery {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
        }
    }
`
export const Head = () => <SEO />
