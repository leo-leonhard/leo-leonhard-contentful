import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import KunstWerk from '../KunstWerk'


const Holzschnitte = ({ data }) => (
    <StaticQuery
      query={graphql`
    query getHolzschnitte {
      allContentfulGrafik(filter: {type: {eq: "Zeichnung"}}) {
        nodes {
          year
          slug
          width
          type
          title
          id
          height
          description {
            childMdx {
              body
            }
          }
          image {
            gatsbyImageData(width: 240)
          }
        }
      }
    }
    `}
      render={data => (
          <div className="d-flex flex-wrap" style={{width: "100%"}}>
            <div style={{width: "100%", marginBottom: "2em"}}>
              <KunstWerk kunstwerk={data.allContentfulGrafik.nodes}/>
            </div>
          </div>
      )}
    />
)




export default Holzschnitte
