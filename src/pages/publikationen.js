import React, { useEffect, useState } from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Card} from "react-bootstrap"

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Verzeichniss from '../components/Verzeichniss'

import '../styles/book.css'


const PublikationenPage = ( { data } ) => {
    const books = data.allContentfulBook.nodes

    return(
        <Layout>
          <div className="d-flex flex-column">
            <Banner image={data.allContentfulBannerImage.nodes}/>
            <div>
              <hr style={{width: "100%"}}/>
              <h3>Bücher</h3>
            </div>
            <div className="mt-3 d-flex flex-wrap" style={{ width: '100%' }}>
              {books.map(book => {
                  const image = getImage(book.coverImage)
                  console.log("IMAGE: ", image)
                  return(
                      <Card key={image.slug} style={{ width: '18em', border: 'none', marginBottom: '2em'}}>
                          <GatsbyImage
                            className="book-cover"
                            image={image}
                            alt={image.title}
                            style={{maxHeight: "100%", objectFit: "contain"}}
                          />

                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          <Card.Text>
                              {book.subtitle}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                  )
              }
                        )}
            </div>
          </div>
          <div>
            <hr/>
            <h3>Verzeichnis der Bücher, Kataloge und Zeitschriften mit Abbildungen der Arbeiten Leo Leonhards</h3>
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
