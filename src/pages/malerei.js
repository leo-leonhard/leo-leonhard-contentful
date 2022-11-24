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
