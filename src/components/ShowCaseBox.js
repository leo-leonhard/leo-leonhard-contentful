import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
// import { Button } from "react-bootstrap"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
// import { MDXProvider } from "@mdx-js/react"


const ShowCaseBox = ({data, props}) => {
    return (
        <StaticQuery
          query={graphql`
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
    `}
          render={data => (

              <div className="d-flex flex-wrap justify-content-between showcase-box" style={{margin: "3em", maxWidth: "100%", gap: "22px"}}>
                {data.allContentfulShowcaseBox.nodes.map((box) => {
                    const image = getImage(box.image)
                    return(
                        <div key={box.id} style={{width: "14em"}} className="mb-5 showcase-section">
                          <Link style={{color: "#212529"}} to={box.slug}>
                            <GatsbyImage className="showcase-image" image={image} style={{marginBottom: "1em", width: "14em", height: "12em"}}/>
                            <h4 className="fett">{box.header}</h4>
                            <div
                              style={{
                                  width: "90%"
                              }}>
                              <p style={{fontSize: "0.9em"}}>{box.text.childMdx.excerpt}</p>
                              <button className="btn btn-show-case-box">mehr</button>
                            </div>
                          </Link>
                        </div>
                    )
                })}
              </div>
          )}
        />
    )}


export default ShowCaseBox
