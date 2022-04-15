import React, { useEffect, useState } from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import '../styles/book.css'


const PublikationenPage = ( { data } ) => {
    const books = data.allContentfulBook.nodes
    const numray = []
    const newray = []

    useEffect(() => {
        {books.map(book => {
            numray.push(book.year)
        })}
        numray.sort(function(a, b) {
            return a - b;
        });

        {books.map(book => {
            for (let i = 0; i < numray.length; i++) {
                if (numray[i] === book.year) {
                    newray.push(book.title)
                    return newray
                } else {
                    return console.log('nope')
                }
            }
        })}

    })
    console.log(newray);


    return(
        <Layout>
          <div className="d-flex flex-column">
            <Banner image={data.allContentfulBannerImage.nodes}/>
            <div className="mb-4" style={{width: "100%"}}>
              <hr style={{width: "100%"}}/>
              <h3>Bücher</h3>
            </div>
            <div className="d-flex flex-wrap" style={{width: "100%"}}>
              {books.map(book => {
                  const image = getImage(book.coverImage)
                  return(
                      <div className="mb-5" key={image.slug} style={{width: "20%"}}>
                        <div>
                          <div style={{height: "22vw"}}>
                            <GatsbyImage
                              className="book-cover"
                              image={image}
                              alt={image.title}
                              style={{maxHeight: "100%", objectFit: "contain"}}
                            />
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
