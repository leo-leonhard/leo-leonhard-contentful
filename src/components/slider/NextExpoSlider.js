import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './nextExpoSlider.css'

const settings = {
    arrows: true,
    dots: true,
    autoplay: true,
    infinite: true,
    fade: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1
}

// revisar lo de BgImage
// https://www.gatsbyjs.com/plugins/gbimage-bridge/
// y esto
// https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/

export default function NextExpoSlider() {
    const data = useStaticQuery(graphql`
        query NextExpoQuery {
            allContentfulNextExposition {
                nodes {
                    nexttitle
                    nextorder
                    nextimage {
                        id
                        gatsbyImageData(
                            width: 1200
                            placeholder: BLURRED
                            layout: CONSTRAINED
                        )
                        filename
                        url
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Slider {...settings}>
                {data.allContentfulNextExposition.nodes.map((element) => {
                    const nextExpoImage = getImage(element.nextimage)

                    return (
                        <div key={element.nextorder}>
                            <BgImage
                                alt={element.nexttitle}
                                image={nextExpoImage}
                                /* className="bgimage" */
                                style={{
                                    objectFit: 'contain',
                                    maxHeight: '40%',
                                    height: '53vh',
                                    width: '100%'
                                }}
                            ></BgImage>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
