import React from "react"
import {graphql} from 'gatsby'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import ausstellungen from "../images/Slbst_Öl.jpg"


export default function Ausstellungen({ data }) {
    return(
        <>
          <NavBar/>
          <div style={{width: "75%", margin: "1em auto 3em auto"}}>
          <img
            className="mb-5"
            alt="text"
            src={ausstellungen}
            style={{
                width: "100%",
                height: "80vh",
                objectFit: "cover"
            }}
          />
            <h2>EINZELAUSSTELLUNGEN</h2>
            <hr style={{width: "20%", margin: "3em 0 1em 0"}}/>
            <div className="d-flex flex-wrap justify-content-between">
              {data.allContentfulEinzelausstellungen.nodes.map(ausstellung => (
                  <div
                    style={{
                        width: "30%"
                    }}>
                    <h3
                      className="mt-2 mb-4"
                      style={{color: "#589AAD"}}
                    >
                      {ausstellung.zeitraum}
                    </h3>
                    <div
                      className="d-flex flex-column"
                      style={{
                          flexFlow: "wrap"
                      }}>
                      {ausstellung.ausstellungen.map(x => (
                          <div
                            className="mb-3"
                            style={{
                                fontSize: "0.9em"
                            }}>
                            <p style={{margin: "0"}}>{x.year}</p>
                            {x.venues.map(v=>(
                                <p style={{margin: "0"}}>{v.name}</p>
                            ))}
                          </div>
                      ))}
                    </div>
                    <hr style={{width: "20%"}}/>
                  </div>
              ))}
            </div>
          </div>
          <Footer/>
        </>
    )}


export const query = graphql`

query getAusstellungen {
  allContentfulPageBanner(filter: {slug: {eq: "lebenslauf"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
  allContentfulEinzelausstellungen(sort: {fields: zeitraum, order: ASC}) {
    nodes {
      zeitraum
      height
      ausstellungen {
        year
        venues {
          name
        }
      }
    }
  }
  allContentfulGruppenausstellungen(sort: {fields: zeitraum, order: ASC}) {
    nodes {
      zeitraum
      height
      gruppenausstellung {
        year
        venues {
          name
        }
      }
    }
  }
}
`
