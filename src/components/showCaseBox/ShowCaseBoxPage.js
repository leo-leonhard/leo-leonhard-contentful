import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import './showCaseBox.css'

export default function ShowCaseBoxPage({ alt, src, text }) {
    return (
        <section className="standard-layout-width">
            <div className="showcase-page">
                <GatsbyImage alt={alt} className="img-showcase" image={src} />

                {/* <img src={src} alt={alt} className="img-showcase" /> */}
                <div className="showcase-text-page">
                    <MDXProvider>
                        <MDXRenderer>{text}</MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </section>
    )
}
