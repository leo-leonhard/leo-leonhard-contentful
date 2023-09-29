import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import KunstWerk from '../KunstWerk'

export default function Aquarelle() {
    const data = useStaticQuery(graphql`
        query getAquarelle {
            allContentfulMalereiImages(
                filter: {
                    node_locale: { eq: "de-DE" }
                    category: { eq: "Aquarelle" }
                }
                sort: { order: DESC, fields: year }
            ) {
                nodes {
                    category
                    title
                    id
                    slug
                    year
                    image {
                        gatsbyImageData
                    }
                }
            }
        }
    `)
    return (
        <div className="d-flex flex-wrap" style={{ width: '100%' }}>
            <div style={{ width: '100%', marginBottom: '2em' }}>
                <KunstWerk kunstwerk={data.allContentfulMalereiImages.nodes} />
            </div>
        </div>
    )
}
