import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './showCaseBox.css'

export default function ShowCaseBox({ items }) {
    return (
        <section className="showcase">
            {items.map((box) => {
                const image = getImage(box.mainImage)
                return (
                    <div key={box.id} className="showcase-cards">
                        <Link className="showcase-link" to={box.slug}>
                            <GatsbyImage
                                className="showcase-img"
                                image={image}
                            />
                            <div className="showcase-text-container">
                                <h4 className="fett">{box.title}</h4>
                                <p>{box.desc.childMdx.excerpt}</p>
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
