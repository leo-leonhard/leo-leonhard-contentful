import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import KunstWerk from '../KunstWerk'

const Zeichnungen = () => (
    <StaticQuery
        query={graphql`
            query getZeichnungen {
                allContentfulGrafik(
                    filter: { type: { eq: "Zeichnung" } }
                    sort: { order: DESC, fields: year }
                ) {
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
            }
        `}
        render={(data) => (
            <div className="d-flex flex-wrap" style={{ width: '100%' }}>
                <div style={{ width: '100%', marginBottom: '2em' }}>
                    <KunstWerk kunstwerk={data.allContentfulGrafik.nodes} />
                </div>
            </div>
        )}
    />
)

export default Zeichnungen
