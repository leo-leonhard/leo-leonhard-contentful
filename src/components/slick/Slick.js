import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

import './slick.css'
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
            allContentfulSlider(
                sort: { fields: order, order: ASC }
                filter: { node_locale: { eq: "de-DE" } }
            ) {
                nodes {
                    id
                    title
                    subtitle
                    color
                    description {
                        childMdx {
                            body
                        }
                    }
                    link
                    image {
                        gatsbyImageData(
                            width: 1200
                            placeholder: BLURRED
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }
    `)
    return (
        <div className="homepage-banner mb-5">
            <Slider {...settings}>
                {data.allContentfulSlider.nodes.map((item) => {
                    const slickImage = getImage(item.image)

                    return (
                        <div key={item.id}>
                            <BgImage
                                className="d-flex align-items-end"
                                alt={item.title}
                                image={slickImage}
                                style={{
                                    maxHeight: '80%',
                                    objectFit: 'contain',
                                    height: '73vh'
                                }}
                            >
                                <Link
                                    to={item.link}
                                    className="slider-text-box"
                                    style={{
                                        background: `${item.color}`,
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
                                        {item.title}
                                    </div>
                                    <p
                                        style={{
                                            color: 'black',
                                            fontSize: '2vw'
                                        }}
                                    >
                                        {item.subtitle}
                                    </p>
                                    {/* use MDX??? */}
                                    {item.description ? (
                                        <p className="home-banner-text">
                                            <MDXProvider>
                                                <MDXRenderer>
                                                    {
                                                        item.description
                                                            .childMdx.body
                                                    }
                                                </MDXRenderer>
                                            </MDXProvider>
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
