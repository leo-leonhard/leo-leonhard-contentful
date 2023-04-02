import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import './showCaseBox.css'

export default function ShowCaseBox({ image }) {
    return (
        <section className="showcase">
            {image.map((box) => {
                const image = getImage(box.image)
                return (
                    <div key={box.slug} className="showcase-cards">
                        <Link className="showcase-link" to={box.slug}>
                            <GatsbyImage
                                className="showcase-img"
                                image={image}
                            />
                            <div className="showcase-text-container">
                                <h4 className="fett">{box.header}</h4>
                                <p>{box.text.childMdx.excerpt}</p>
                                <div>
                                    <button className="btn showcase-as-buton">
                                        mehr
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}
