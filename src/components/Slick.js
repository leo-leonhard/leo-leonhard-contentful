import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby"

import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { converToBgImage } from "gbimage-bridge"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import '../styles/banner-style.css'

import logo from '../images/logo_white.png'


export default class Slidy extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: true,
            autoplay: true,
            infinite: true,
            fade: true,
            autoplaySpeed: 8000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <StaticQuery
              query={graphql`
                  query SlickQuery {
                    allContentfulSliderImage (sort: {fields: position, order: ASC}){
                      nodes {
                        page
                        position
                        imageTitle
                        color
                        bannerText {
                          bannerText
                        }
                        subtitle
                        id
                        sliderImage {
                          gatsbyImageData(
                          width: 1200,
                          placeholder: BLURRED,
                          layout: CONSTRAINED
                          )
                          url
                        }
                      }
                    }
                  }
               `}
              render={data => (
                  <div className="homepage-banner mb-5">
                    <Slider {...settings}>
                      {data.allContentfulSliderImage.nodes.map((image) => {
                          const slickImage = getImage(image.sliderImage)
                          return(
                              <div key={image.id}>
                                <BgImage
                                  className="d-flex align-items-end"
                                  alt={image.imageTitle}
                                  image={slickImage}
                                  style={{maxHeight: "100%", objectFit: "contain",height: "93vh"}}
                                >
                                  <Link
                                    to={image.page}
                                    className="slider-text-box"
                                    style={{background: image.color}}
                                  >
                                    <hr style={{width: "3em", color: "white"}}/>
                                    <div className="ubuntu-bold" style={{letterSpacing: "0.1em", fontSize: "1.7em", color: "white"}}>{image.imageTitle}</div>
                                    <p style={{color: "black"}}>{image.subtitle}</p>
                                    {image.bannerText ? <p style={{color: "black", fontSize: "0.9em"}}>{image.bannerText.bannerText}</p> : <section style={{marginBottom: "5em"}}></section>}
                                  </Link>
                                </BgImage>
                              </div>
                          )
                      })}
                    </Slider>
                  </div>
              )}
            />

        );
    }
}
