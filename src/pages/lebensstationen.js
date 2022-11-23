import React from "react"
import {graphql} from 'gatsby'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import portrait from "../images/portrait.jpg"

export default function Lebensstationen({ data }) {
    return(
        <>
          <NavBar/>
          <div style={{background: "#F8F3EA", padding: "3em 0"}}>
            <div style={{width: "60%", margin: "0 auto"}}>
              <div style={{margin: "0 auto"}}>
                <div className="mb-5">
                  <h2>LEBENSSTATIONEN</h2>
                  <h2>LEO LEONHARD</h2>
                  <h2>1939 - 2011</h2>
                  <hr style={{width: "20%", margin: "3em 0 1em 0"}}/>
                </div>
                <img src={portrait}/>
                <div className="mt-4">
                  {data.allContentfulLebenslauf.nodes.map(entry => (
                      <div style={{fontSize: "0.9em"}}>
                        <p className="fett">{entry.year}</p>
                        <p style={{marginTop: "-1em"}}>{entry.event}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </>
    )}


export const query = graphql`
query getLebensstationenContent {
 allContentfulLebenslauf(sort: {fields: year, order: ASC}) {
    nodes {
      year
      event
    }
  }
}`
