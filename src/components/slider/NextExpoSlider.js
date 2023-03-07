import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
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
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
}

export default function NextExpoSlider() {
    const data = useStaticQuery(graphql`
        query NextExpoQuery {
            allContentfulNextExposition {
                nodes {
                    nexttitle
                    link
                    nextorder
                    nextimage {
                        id
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            aspectRatio: 1.5
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
                    let link = element.link

                    return (
                        <div key={element.nextorder}>
                            <Link to={link}>
                                <BgImage
                                    alt={element.nexttitle}
                                    image={nextExpoImage}
                                    className="bgimage"
                                ></BgImage>
                            </Link>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
