import React from 'react'
import { Link } from 'gatsby'
// import { getImage } from 'gatsby-plugin-image'
// import { MDXProvider } from '@mdx-js/react'
// import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
// import { BgImage } from 'gbimage-bridge'

import { SEO } from '../components/Seo'
import LaudaFabrik from '../assets/images/Lauda-Fabrikgalerie.png'

export default function PflasterBanner() {
    return (
        <div className="mt-4">
            <div>
                <Link to="https://www.lauda-fabrikgalerie.de/de/">
                    <img
                        className="mb-5 d-flex align-items-end"
                        src={LaudaFabrik}
                        style={{
                            maxHeight: '100%',
                            objectFit: 'contain',
                            height: '93vh'
                        }}
                    />
                </Link>
            </div>
            )
        </div>
    )
}

/* 
export default function PflasterBanner({ image }) {
    return (
        <div className="mt-4">
            {image.map((img) => {
                const image = getImage(img.image)
                return (
                    <div key={img.slug}>
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
                                to="/pflaster"
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
                                    {img.title}
                                </p>
                                <div
                                    style={{ fontSize: '1.2vw' }}
                                    id="banner-text"
                                >
                                    <MDXProvider>
                                        <MDXRenderer>
                                            {img.text.childMdx.body}
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

*/
export const Head = () => <SEO title="IMITATION GEPRÄGT VON HOCHACHTUNG" />
