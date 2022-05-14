import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import KunstWerk from '../KunstWerk'


const Aquarelle = ({ data }) => (
    <StaticQuery
      query={graphql`
    query getAquarelle {
      allContentfulMalerei(filter: {type: {eq: "Aquarelle"}}) {
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
              <KunstWerk kunstwerk={data.allContentfulMalerei.nodes}/>
            </div>
          </div>
      )}
    />
)




export default Aquarelle
