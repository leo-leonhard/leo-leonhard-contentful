import React from 'react'
import {graphql, Link} from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'

import portrait from "../images/portrait.jpg"
import selbstportraet from "../images/selbstporttraet.png"
import img from "../images/Aufgang.jpg"
import auszeichnungen from "../images/Slbst_Öl.jpg"

const Box = (props) => {
    const title = props.title
    const image = props.image
    const destination = props.destination
    return (
        <div style={{width: "20%", margin: "1em"}}>
          <Link to={destination} style={{color: "#212529"}}>
            <img src={image} style={{width: "100%", height: "40%"}}/>
            <div className="mt-1">
              <h4 className="fett mt-3">{title}</h4>
              <p style={{fontSize: "0.7em"}}>Neben der Kunst galt Leo Leonhards grosses Interesse der Literatur. Fuer sein Werk...</p>
              <button style={{width: "100%", fontSize: "1vw", background: "#589AAD", border: "3px solid #589AAD", color: "snow", textTransform: "uppercase"}}>{title}</button>
            </div>
          </Link>
        </div>
    )}

const LebenslaufPage = ({ data }) => (
    <>
      <NavBar/>
      <div style={{width: "75%", margin: "1em auto"}}>
        <section style={{background: "#F8F3EA", padding: "1em 2em 3em 2em"}}>
          <PageBanner image={data.allContentfulPageBanner.nodes}/>
          <IntroText
            introdata={data.allContentfulIntroText.nodes}
          />
        </section>
        <br/>
        <div className="d-flex justify-content-between">
          <Box
            title="Lebensstationen"
            destination="/lebensstationen"
            image={portrait}/>
          <Box
            title="Nachruf"
            destination="/nachruf"
            image={portrait}/>
          <Box
            title="Auszeichnungen"
            destination="/auszeichnungen"
            image={auszeichnungen}/>
          <Box
            title="Ausstellungen"
            destination="/ausstellungen"
            image={auszeichnungen}/>
        </div>
      </div>
      <Footer/>
    </>
)


export const query = graphql`
query getLebenslaufContent {
  allContentfulIntroText(filter: {slug: {eq: "lebenslauf"}}) {
    nodes {
      id
      slug
      header
      page
      text {
        childMdx {
          body
        }
      }
    }
  }
  allContentfulPageBanner(filter: {slug: {eq: "lebenslauf"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
 allContentfulLebenslauf(sort: {fields: year, order: ASC}) {
    nodes {
      year
      event
    }
  }
allContentfulAuszeichnung(sort: {fields: year, order: ASC}) {
    nodes {
      year
      auszeichnungen {
        childMdx {
          body
        }
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


export default LebenslaufPage
