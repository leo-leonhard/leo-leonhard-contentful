import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

/* 
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}
*/

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
        <div
            className="d-flex flex-wrap justify-content-between showcase-box"
            style={{ margin: '3em', maxWidth: '100%', gap: '22px' }}
        >
            {data.allContentfulShowcaseBox.nodes.map((box) => {
                const image = getImage(box.image)
                return (
                    <div
                        key={box.id}
                        style={{ width: '14em' }}
                        className="mb-5 showcase-section"
                    >
                        <Link style={{ color: '#212529' }} to={box.slug}>
                            <GatsbyImage
                                className="showcase-image"
                                image={image}
                                style={{
                                    marginBottom: '1em',
                                    width: '14em',
                                    height: '12em'
                                }}
                            />
                            <h4 className="fett">{box.header}</h4>
                            <div
                                style={{
                                    width: '90%'
                                }}
                            >
                                <p style={{ fontSize: '0.9em' }}>
                                    {box.text.childMdx.excerpt}
                                </p>
                                <button className="btn btn-show-case-box">
                                    mehr
                                </button>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
