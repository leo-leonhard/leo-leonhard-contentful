import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

export default function ArtAll() {
    // const data = useStaticQuery(graphql`
    /* query getGrafikContentArt {
            allContentfulGrafik(filter: { type: { eq: "Zeichnung" } }) {
                nodes {
                    year
                    slug
                    type
                    title
                    id
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
    `) */
    return (
        <>
            {/* <h1>acá intentamos renderizar todo junto: {data.header}</h1> */}
        </>
    )
}
