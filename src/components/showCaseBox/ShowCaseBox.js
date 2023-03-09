import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import './showCaseBox.css'

export default function ShowCaseBox() {
    const data = useStaticQuery(graphql`
        query ShowCaseBoxQuery {
            allContentfulShowcaseBox {
                nodes {
                    id
                    slug
                    header
                    text {
                        childMdx {
                            body
                            excerpt(pruneLength: 80)
                        }
                    }
                    image {
                        gatsbyImageData(width: 525, placeholder: BLURRED)
                    }
                }
            }
        }
    `)
    return (
        <section className="showcase">
            {data.allContentfulShowcaseBox.nodes.map((box) => {
                const image = getImage(box.image)
                return (
                    <div key={box.id} className="showcase-cards">
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
