import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import KunstWerk from '../KunstWerk'

const Oelgemaelde = () => (
    <StaticQuery
        query={graphql`
            query getOelgemaelde {
                allContentfulMalerei(
                    filter: { type: { eq: "Ölgemälde" } }
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
                    <KunstWerk kunstwerk={data.allContentfulMalerei.nodes} />
                </div>
            </div>
        )}
    />
)

export default Oelgemaelde
