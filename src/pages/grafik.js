import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import IntroText from '../components/IntroText'
import Radierungen from '../components/ArtWork/Grafik/Radierungen'
import Zeichnungen from '../components/ArtWork/Grafik/Zeichnungen'
import Holzschnitte from '../components/ArtWork/Grafik/Holzschnitte'


const GrafikPage = ({ data }) => {
    return(
        <Layout>
          <Banner image={data.allContentfulBannerImage.nodes}/>
          <IntroText introdata={data.allContentfulIntroText.nodes}/>
          <div className="mb-5">
            <h1 className="">Das Zeichnerische Werk</h1>
            <hr/>
          </div>
          <div id="zeichnungen">
            <h2>Zeichnungen</h2>
            <Zeichnungen/>
          </div>
          <div id="radierungen">
            <h2>Radierungen</h2>
            <Radierungen/>
          </div>
          <div id="holzschnitte">
            <h2>Holzschnitte</h2>
            <Holzschnitte/>
          </div>
        </Layout>
    )
}

export const query = graphql`
query getGrafikContent {
  allContentfulBannerImage(filter: {slug: {eq: "grafik"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
  allContentfulIntroText(filter: {slug: {eq: "grafik"}}) {
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
}
`


export default GrafikPage
