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
            <div className="mb-5" style={{background: "#BFD8E5", padding: "2em 4em"}}>
              <div className="main-layout">
                <h2 className="mb-5">DIE GRAFISCHEN MAPPENWERKE</h2>
                <div className="d-flex justify-content-between mb-4">
                  {data.allContentfulGrafik.nodes.map(grafik => {
                      const image = getImage(grafik.image)
                      return(
                          <div className="d-flex flex-column" style={{maxWidth: "240px"}}>
                            <div style={{height: "4.5em"}}>
                              <h4 className="fett" style={{textTransform: "uppercase"}}>{grafik.title}</h4>
                              <h4 style={{textTransform: "uppercase"}}>{grafik.year}</h4>
                            </div>
                            <GatsbyImage image={image}/>
                          </div>
                      )
                  })}
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl. <span className="fett" style={{margin: "0 0.5em"}}>mehr...</span>
                </div>
              </div>
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
            gatsbyImageData(width: 240)
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
