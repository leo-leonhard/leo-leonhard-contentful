import React, { useEffect, useState } from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Verzeichniss from '../components/Verzeichniss'

import '../styles/book.css'


const PublikationenPage = ( { data } ) => {
    const books = data.allContentfulBook.nodes

    return(
        <Layout>
          <div className="d-flex flex-column mb-5">
            <Banner image={data.allContentfulBannerImage.nodes}/>
            <div className="mb-5" style={{width: "100%"}}>
              <hr style={{width: "100%"}}/>
              <h3>Bücher</h3>
            </div>
            <div className="books-container d-flex flex-wrap" style={{width: "100%", gap: "3.8em"}}>
              {books.map(book => {
                  const image = getImage(book.coverImage)
                  return(
                      <div className="book-container mb-3" key={image.slug} style={{maxWidth: "21%" ,flex: "1 0 21%"}}>
                          <div className="book-cover-container" style={{height: "22vw"}}>
                            <GatsbyImage
                              className="book-cover"
                              image={image}
                              alt={image.title}
                              style={{maxHeight: "100%", objectFit: "contain"}}
                            />
                          </div>
                          <div className="book-info mt-2">
                            <h3>{book.year}</h3>
                            <h4 style={{color: "#589AAD"}}>{book.title}</h4>
                            <h4>{book.subtitle}</h4>
                          </div>
                      </div>
                  )
              }
                        )}
            </div>
          </div>
          <div>
            <hr/>
            <h3 className="mb-5">Verzeichnis der Bücher, Kataloge und Zeitschriften mit Abbildungen der Arbeiten Leo Leonhards</h3>
            <Verzeichniss/>
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
  allContentfulBook(sort: {fields: year, order: ASC}) {
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
