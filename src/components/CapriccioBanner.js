import React from 'react'
import { Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { BgImage } from 'gbimage-bridge'

export default function CapriccioBanner({ items }) {
    return (
        <div className="mt-4">
            {items.map((item, index) => {
                const image = getImage(item.mainImage)
                return (
                    <div key={index}>
                        <BgImage
                            className="mb-5 d-flex align-items-end"
                            image={image}
                            style={{
                                maxHeight: '100%',
                                objectFit: 'contain',
                                height: '93vh'
                            }}
                        >
                            <Link
                                to="/capriccio"
                                className="banner-text-box"
                                style={{
                                    padding: '1em 2em',
                                    color: '#FBFBFD',
                                    background: 'rgba(95,149,169,0.8)'
                                }}
                            >
                                <p
                                    className="fett"
                                    style={{
                                        textTransform: 'uppercase',
                                        fontSize: '1.8vw'
                                    }}
                                    id="banner-title"
                                >
                                    {item.title}
                                </p>
                                <div
                                    style={{ fontSize: '1.2vw' }}
                                    id="banner-text"
                                >
                                    <MDXProvider>
                                        <MDXRenderer>
                                            {item.desc.childMdx.body}
                                        </MDXRenderer>
                                    </MDXProvider>
                                </div>
                            </Link>
                        </BgImage>
                    </div>
                )
            })}
        </div>
    )
}
