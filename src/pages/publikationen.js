import React, { useEffect, useState } from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Card} from "react-bootstrap"

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Verzeichniss from '../components/Verzeichniss'
import IntroText from '../components/IntroText'

import '../styles/book.css'



const PublikationenPage = ( { data } ) => {
    const books = data.allContentfulBook.nodes
    return(
        <Layout>
          <div className="d-flex flex-column">
            <Banner image={data.allContentfulBannerImage.nodes}/>
            <IntroText introdata={data.allContentfulIntroText.nodes}/>
            <div>
              <hr style={{width: "100%"}}/>
              <h1 style={{color: "rgb(60, 159, 187)"}} className="mt-5 mb-5">Bücher</h1>
              <br/>
            </div>
            <div className="mt-3 d-flex flex-wrap justify-content-between" style={{ width: '100%' }}>
              {books.map(book => {
                  const image = getImage(book.coverImage)
                  console.log("IMAGE: ", image)
                  return(
                      <Card key={image.slug} style={{ width: '20em', border: 'none', marginBottom: '4em'}}>
                        <div style={{textAlign: "left", height: "20em"}}>
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
            <h1 style={{color: "rgb(60, 159, 187)"}} className="mt-5 mb-5">Verzeichnis der Bücher, Kataloge und Zeitschriften mit Abbildungen der Arbeiten Leo Leonhards</h1>
            <br/>
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
        gatsbyImageData(width: 1200, placeholder: BLURRED)
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
          allContentfulIntroText(filter: {slug: {eq: "publikationen"}}) {
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




export default PublikationenPage
