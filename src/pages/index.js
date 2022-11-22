import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'

import Slidy from '../components/Slick'
import IntroText from '../components/IntroText'
import ShowCaseBox from '../components/ShowCaseBox'
import Banner from '../components/Banner'

import konzert from '../images/Konzert.jpg'

import '../styles/index.css'


const IndexPage = ({ data }) => {
    return (
        <>
          <NavBar/>
          <div className="d-flex flex-column">
            <div id="banner-container" style={{width: "75%", margin: "0 auto"}}>
              <Slidy/>
            </div>
            <div className="main-layout">
              <IntroText introdata={data.allContentfulIntroText.nodes}/>
            </div>
            <Banner image={data.allContentfulBannerImage.nodes}/>
            <div className="main-layout">
              <ShowCaseBox/>
            </div>
            <NewsLetter/>
            <div className="mt-5" style={{height: "65vw", backgroundImage: `url(${konzert})`, backgroundPosition: "bottom",backgroundSize: "cover"}}>
            </div>
          </div>
          <Footer/>
        </>
    )
}

export const query = graphql`
    query IntroTextQuery {
      allContentfulGrafik(limit: 3) {
        nodes {
          year
          slug
          width
          type
          title
          id
          height
          image {
            gatsbyImageData(width: 260)
          }
        }
      }
        allContentfulBannerImage {
            nodes {
                image {
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
                title
                text {
                  childMdx {
                    body
                  }
               }
            }
        }
          allContentfulIntroText(filter: {slug: {eq: "index"}}) {
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

export default IndexPage
