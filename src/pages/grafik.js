import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'


const GrafikPage = ( { data } ) => {
    const grafiken = data.allContentfulGrafik.nodes

    return(
    <Layout>
      <Banner image={data.allContentfulBannerImage.nodes}/>
      <div className="d-flex flex-wrap" style={{width: "100%"}}>
          {grafiken.map(grafik => {
              const image = getImage(grafik.image)
              return(
                  <div>
                    <GatsbyImage image={image} alt={grafik.title}/>
                  </div>
              )
        })}
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
        resize(width: 1200) {
          width
          height
          src
        }
      }
    }
  }
 allContentfulGrafik {
    nodes {
      id
      year
      title
      image {
        gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
      }
    }
  }
}
`


export default GrafikPage
