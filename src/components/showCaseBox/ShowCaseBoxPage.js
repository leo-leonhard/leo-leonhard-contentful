import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import './showCaseBox.css'
import '../../styles/single-page-style.css'

export default function ShowCaseBoxPage({ alt, src, text, newsrc }) {
    return (
        <section className="standard-layout-width">
            <div className="showcase-page">
                <GatsbyImage alt={alt} className="img-showcase" image={src} />

                <div className="gallery-single-page">
                    <GatsbyImage
                        className="gallery-single-page-img"
                        image={newsrc}
                    />
                </div>

                <div className="showcase-text-page">
                    <MDXProvider>
                        <MDXRenderer>{text}</MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </section>
    )
}
