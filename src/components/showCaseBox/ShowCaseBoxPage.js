import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import './showCaseBox.css'
import '../../styles/single-page-style.css'

export default function ShowCaseBoxPage({ src, alt, text, title }) {
    return (
        <section className="standard-layout-width">
            <div className="showcase-page">
                <GatsbyImage alt={alt} className="img-showcase" image={src} />
                {/* {gallery ? (
                    <GatsbyImage
                        alt={alt}
                        className="img-showcase"
                        image={src}
                    />
                ) : (
                    <div className="gallery-single-page">
                        {gallery.map((item) => {
                            const image = getImage(item)
                            return (
                                <div
                                    key={item.id}
                                    className="single-container-image"
                                >
                                    <GatsbyImage
                                        className="gallery-single-page-img"
                                        image={image}
                                        alt="test random for now"
                                    />
                                </div>
                            )
                        })}
                    </div>
                )} */}

                {title ? (
                    <div className="title-schowcase">
                        <h1>{title}</h1>
                    </div>
                ) : null}
                <div className="showcase-text-page">
                    <MDXProvider>
                        <MDXRenderer>{text}</MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </section>
    )
}
