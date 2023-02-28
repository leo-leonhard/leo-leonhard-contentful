import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import KunstWerk from '../KunstWerk'

const Radierungen = ({ data }) => (
    <StaticQuery
        query={graphql`
            query getRadierungen {
                allContentfulGrafik(
                    filter: { type: { eq: "Radierung" } }
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

export default Radierungen
