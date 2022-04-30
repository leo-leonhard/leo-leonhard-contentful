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
                                      <BgImage  alt={slickImage.imageTitle} image={slickImage} style={{maxHeight: "100%", objectFit: "contain",height: "93vh"}}>
                                        <div>Hello from BgImage!</div>
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
