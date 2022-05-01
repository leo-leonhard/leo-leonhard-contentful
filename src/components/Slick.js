import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby"

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
                    allContentfulSliderImage {
                      nodes {
                        imageTitle
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
                              console.log(slickImage)
                                return(
                                    <div key={slickImage.id}>
                                    <BgImage className="d-flex align-items-end" alt={slickImage.imageTitle} image={slickImage} style={{maxHeight: "100%", objectFit: "contain",height: "93vh"}}>
                                      <a href="/publikationen" style={{textDecoration: "none",background: "rgba(200, 222, 111, 0.8)", width: "40%", minHeight: "10em", padding: "0.5em 2em", margin: "2em 3em"}}>
                                          <hr style={{width: "3em", color: "white"}}/>
                                        <div className="ubuntu-bold" style={{fontSize: "1.6em", color: "white"}}>{image.imageTitle}</div>
                                          <p style={{color: "black"}}>{image.subtitle}</p>
                                          <p></p>
                                          {image.bannerText ? <p>{image.bannerText.bannerText}</p> : null}
                                        </a>
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
