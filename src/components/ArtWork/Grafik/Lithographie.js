import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import KunstWerk from '../KunstWerk'

const Lithographie = () => (
    <StaticQuery
        query={graphql`
            query getLithographie {
                allContentfulGrafik(
                    filter: { type: { eq: "Lithographie" } }
                    sort: { order: DESC, fields: year }
                ) {
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

export default Lithographie
