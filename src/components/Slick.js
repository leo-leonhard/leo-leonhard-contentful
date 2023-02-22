import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

export default function Slidy() {
    const data = useStaticQuery(graphql`
        query slickQuery {
            allContentfulSliderImage(
                sort: { fields: reihenfolge, order: ASC }
            ) {
                nodes {
                    page
                    reihenfolge
                    imageTitle
                    color
                    bannerText {
                        bannerText
                    }
                    subtitle
                    id
                    sliderImage {
                        gatsbyImageData(
                            width: 1200
                            placeholder: BLURRED
                            layout: CONSTRAINED
                        )
                        url
                    }
                }
            }
        }
    `)
    return (
        <div className="homepage-banner mb-5">
            <Slider {...settings}>
                {data.allContentfulSliderImage.nodes.map((image) => {
                    const slickImage = getImage(image.sliderImage)

                    return (
                        <div key={image.id}>
                            <BgImage
                                className="d-flex align-items-end"
                                alt={image.imageTitle}
                                image={slickImage}
                                style={{
                                    maxHeight: '80%',
                                    objectFit: 'contain',
                                    height: '73vh'
                                }}
                            >
                                <Link
                                    to={image.page}
                                    className="slider-text-box"
                                    style={{
                                        background: image.color,
                                        width: 'min-content'
                                    }}
                                >
                                    <hr
                                        style={{
                                            width: '3em',
                                            color: 'white'
                                        }}
                                    />
                                    <div
                                        className="ubuntu-bold"
                                        style={{
                                            letterSpacing: '0.1em',
                                            fontSize: '3vw',
                                            color: 'white'
                                        }}
                                    >
                                        {image.imageTitle}
                                    </div>
                                    <p
                                        style={{
                                            color: 'black',
                                            fontSize: '2vw'
                                        }}
                                    >
                                        {image.subtitle}
                                    </p>
                                    {image.bannerText ? (
                                        <p className="home-banner-text">
                                            {image.bannerText.bannerText}
                                        </p>
                                    ) : (
                                        <section
                                            style={{
                                                marginBottom: '5em'
                                            }}
                                        ></section>
                                    )}
                                </Link>
                            </BgImage>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
