import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import IntroText from '../components/IntroText'
import Oelgemaelde from '../components/ArtWork/Malerei/Oelgemaelde'
import Aquarelle from '../components/ArtWork/Malerei/Aquarelle'

const MalereiPage = ({ data }) => (
    <Layout>
      <Banner image={data.allContentfulBannerImage.nodes}/>
      <IntroText introdata={data.allContentfulIntroText.nodes}/>
      <div className="mb-5">
        <hr />
      </div>
      <h2>Ölgemälde</h2>
      <Oelgemaelde />
      <h2>Aquarelle</h2>
      <Aquarelle/>
    </Layout>
)



export const query = graphql`
query getMalereiContent {
  allContentfulBannerImage(filter: {slug: {eq: "malerei"}}) {
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
