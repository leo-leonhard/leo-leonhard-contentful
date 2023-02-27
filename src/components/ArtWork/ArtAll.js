import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function ArtAll() {
    const data = useStaticQuery(graphql`
        query getGrafikContent {
            allContentfulGrafik(filter: { type: { eq: "Zeichnung" } }) {
                nodes {
                    year
                    slug
                    width
                    type
                    title
                    id
                    height
                    image {
                        gatsbyImageData(width: 240)
                    }
                }
            }
            allContentfulDescriptionText(
                filter: { slug: { eq: "zeichnungen" } }
            ) {
                nodes {
                    id
                    slug
                    header
                    page
                    description {
                        id
                        childMdx {
                            body
                        }
                    }
                }
            }
        }
    `)
    return (
        <>
            <h1>acá intentamos renderizar todo junto: {query.header}</h1>
        </>
    )
}
