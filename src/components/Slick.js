import React, { Component } from "react";
import Slider from "react-slick";
import { StaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import '../styles/banner-style.css'

import logo from '../images/logo_white.png'

export default class Slidy extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            fade: true,
            autoplaySpeed: 8000,
            speed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <StaticQuery
                query={graphql`
                  query SlickQuery {
                    allContentfulSliderImages {
                      nodes {
                        bannerText {
                          bannerText
                        }
                        imageTitle
                        id
                        sliderImage {
                          resize(width: 1200) {
                            width
                            height
                            src
                          }
                          url
                        }
                      }
                    }
                  }
               `}
                render={data => (
                    <div className="mb-5">
                        <Slider {...settings}>
                            {data.allContentfulSliderImages.nodes.map((image) => {
                                console.log()
                                return(
                                    <div>
                                        <div key={image.id} style={{height: "93vh", backgroundImage: `url(${image.sliderImage.url})`, backgroundSize: "cover"}}>
                                            {image.imageTitle === 'start'
                                             ? <div className='banner-text'><h2>{image.bannerText.bannerText}</h2><img src={logo}/></div>
                                             : ''
                                            }
                                            </div>

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
