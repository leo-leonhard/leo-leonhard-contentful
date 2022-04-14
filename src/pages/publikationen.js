import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'

const PublikationenPage = ( { data } ) => {
  const books = data.allContentfulBook.nodes

  return(
    <Layout>
    <Banner image={data.allContentfulBannerImage.nodes}/>
    <div style={{border: "2px solid lightcoral"}}>
    {books.map(book => {
          const image = getImage(book.coverImage)
          console.log("Image: ",image)
          return(
            <div key={image.slug} style={{maxWidth: "20%", border: "2px solid lightsalmon"}}>
            <div>
            <div>
            <GatsbyImage image={image} alt={image.title}/>
            </div>
            <div>
            <h3>{book.year}</h3>
            <h4 style={{color: "#589AAD"}}>{book.title}</h4>
            <h4>{book.subtitle}</h4>
            </div>
            </div>
            </div>
          )
        }
      )}
    </div>
    </Layout>
  )
}


export const query = graphql`
query getPublikationenContent {
  allContentfulBannerImage(filter: {slug: {eq: "publikationen"}}) {
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
  allContentfulBook {
    nodes {
      year
      title
      subtitle
      slug
      coverImage {
        title
        gatsbyImageData(width: 180, placeholder: BLURRED)
      }
    }
  }
}
`




export default PublikationenPage
