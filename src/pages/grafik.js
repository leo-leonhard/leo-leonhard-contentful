import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Radierungen from '../components/ArtWork/Grafik/Radierungen'
import Zeichnungen from '../components/ArtWork/Grafik/Zeichnungen'
import Holzschnitte from '../components/ArtWork/Grafik/Holzschnitte'


const GrafikPage = ({ data }) => {
    return(
        <Layout>
          <PageBanner image={data.allContentfulPageBanner.nodes}/>
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
            <div className="mt-3 mb-4">
              <h3>Druckgrafik</h3>
              <p>Leo Leonhard ist ein Künstler, bei dem die Zeichnung und die Druckgrafik eine wichtige Rolle im Werk spielt. Er hat in verschiedensten druckgrafischen Techniken gearbeitet wie etwa Kaltnadelradierung, Lithographie, Holzschnitt oder Farbholzschnitt, hat Einzelblätter geschaffen, aber auch große Mappen zusammengestellt. Leonhard hat die lange Geschichte der Druckgrafik, die in der gotischen Zeit begann und die Albrecht Dürer zu einer frühen Meisterschaft führte, gleichsam durchdrungen – er lehrte lange Jahre, von 1987 bis 2004, als Professor für Zeichnen und Illustration an der Fachhochschule in Mainz.</p>
              <p>Leonhard war zuvor, von 1966 bis 1969, als freier Grafiker tätig, leitete das Druckatelier der Stadt Darmstadt und war Mitglied der internationalen Holzschneidervereinigung XYLON, des Vereins für Original-Radierung in München, des Werkbundes und des Bundes deutscher Buchkünstler. Seine Radierungen und Holzschnitte wurden 1995 in einem Werkverzeichnis publiziert.  Leonhard war Preisträger verschiedener renommierter internationaler Grafik-Wettbewerbe und Träger diverser Auszeichnungen auf dem Feld der Druckgrafik.</p>
            </div>
            <Holzschnitte/>
          </div>
        </Layout>
    )
}

export const query = graphql`
query getGrafikContent {
  allContentfulPageBanner(filter: {slug: {eq: "grafik"}}) {
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
