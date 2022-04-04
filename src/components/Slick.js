import React, { Component } from "react";
import Slider from "react-slick";
import { StaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default class Slidy extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <StaticQuery
                query={graphql`
                  query SlickQuery {
                    allContentfulSliderImages {
                      nodes {
                        id
                        sliderImage {
                          resize(width: 1200) {
                            width
                            height
                            src
                          }
                          url
                          title
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
