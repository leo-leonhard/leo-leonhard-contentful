import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'


const LebenslaufPage = ( { data } ) => (
    <Layout>
      <PageBanner image={data.allContentfulPageBanner.nodes}/>
      <div>
        <h2>ÜBER LEO LEONHARD</h2>
        <p>„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem-
          por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc-
          tus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr.“</p>

        <p>„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem-
          por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc-
          tus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr „Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadips-
          cing elitr</p>

        <p>„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tem-
          por invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanc-
          tus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr</p>
      </div>
      <br/>
      <div className="pt-5 mt-5 mb-5" style={{background: "#F8F3EA"}}>
        <div className="mb-5">
          <h2>LEBENSSTATIONEN</h2>
          <h2>LEO LEONHARD</h2>
          <h2>1939 - 2011</h2>
        </div>
        <div>
          {data.allContentfulLebenslauf.nodes.map(entry => (
              <div style={{lineHeight: "0.5em"}}>
                <p><b>{entry.year}</b></p>
                <p>{entry.event}</p>
              </div>
          ))}
        </div>
        <hr style={{width: "20%"}}/>
      </div>

    </Layout>
)

export const query = graphql`
query getLebenslaufContent {
  allContentfulPageBanner(filter: {slug: {eq: "lebenslauf"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
 allContentfulLebenslauf {
    nodes {
      year
      event
    }
  }
}
`


export default LebenslaufPage
