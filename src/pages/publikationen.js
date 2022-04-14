import React from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import '../styles/book.css'

const PublikationenPage = ( { data } ) => {
  const books = data.allContentfulBook.nodes

  return(
    <Layout>
    <Banner image={data.allContentfulBannerImage.nodes}/>
      <div className="d-flex flex-wrap" style={{width: "100%"}}>
    {books.map(book => {
          const image = getImage(book.coverImage)
          console.log("Image: ",image)
          return(
              <div className="mb-5" key={image.slug} style={{width: "20%"}}>
            <div>
              <div style={{height: "22vw"}}>
              <GatsbyImage className="book-cover" image={image} alt={image.title} style={{maxHeight: "100%", objectFit: "contain"}}/>
            </div>
            <div className="mt-2">
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
        gatsbyImageData(
          width: 180,
          placeholder: BLURRED,
          layout: CONSTRAINED
        )
      }
    }
  }
}
`




export default PublikationenPage
