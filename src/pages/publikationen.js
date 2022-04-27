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
                      <Card key={image.slug} style={{ width: '18em', border: 'none', marginBottom: '4em'}}>
                        <div style={{textAlign: "left", height: "80%"}}>
                          <GatsbyImage
                            className="book-cover"
                            image={image}
                            alt={image.title}
                            style={{maxHeight: "100%", objectFit: "contain"}}
                          />
                        </div>
                        <Card.Body style={{textAlign: "left", padding: "0", width: "80%", marginTop: "0.5em"}}>
                          <Card.Title style={{fontSize: "0.8em", fontWeight: "bold"}}>{book.year}</Card.Title>
                          <Card.Title style={{fontSize: "0.8em", fontWeight: "bold", color: "#589aad"}}>{book.title}</Card.Title>
                          <Card.Text style={{fontSize: "0.8em", fontWeight: "bold"}}>
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
          width: 200,
          placeholder: BLURRED,
          layout: CONSTRAINED
        )
      }
    }
  }
}
`




export default PublikationenPage
