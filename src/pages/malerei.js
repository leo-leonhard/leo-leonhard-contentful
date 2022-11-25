import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Oelgemaelde from '../components/ArtWork/Malerei/Oelgemaelde'
import Aquarelle from '../components/ArtWork/Malerei/Aquarelle'



const MalereiPage = ({ data }) => (
    <Layout>
      <PageBanner image={data.allContentfulPageBanner.nodes}/>
      <br/>
      <IntroText introdata={data.allContentfulIntroText.nodes}/>
      <div className="mt-5 mb-5">
        <hr />
      </div>
      <div id="oelgemaelde">
        <h2>Ölgemälde</h2>
        <Oelgemaelde />
      </div>
      <div id="aquarelle">
        <h2>Aquarelle</h2>
        <div className="mt-3 mb-4">
          <h3>Eine lebensbegleitende künstlerische Praxis</h3>
          <p>Das Aquarell, eine der ältesten Maltechniken überhaupt,
          nimmt im Werk von Leo Leonhard einen bedeutenden Platz
          ein. Die Arbeit mit nicht-deckenden Wasserfarben wurde vor
          allem durch Albrecht Dürer aufgewertet, doch dienten sie ihm
          vor allem zu Studienzwecken und zur Vorbereitung von
          Ölgemälden. Schließlich war es der experimentierfreudige
          William Turner, der das Aquarell zur eigenständigen
          Kunstform entwickelte. In der Tradition der Kunst des
          19. Jahrhunderts und vieler Künstler der Klassischen Moderne
          aquarellierte auch Leo Leonhard vor allem auf seinen Reisen,
          zum Teil auch unter freiem Himmel: Das Aquarellieren war ihm
          eine lebensbegleitende künstlerische Praxis.</p>
        </div>
        <Aquarelle/>
      </div>
    </Layout>
)


export const query = graphql`
query getMalereiContent {
  allContentfulPageBanner(filter: {slug: {eq: "malerei"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
  allContentfulIntroText(filter: {slug: {eq: "malerei"}}) {
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


export default MalereiPage
