import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Button } from "react-bootstrap"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"



const ShowCaseBox = ({data}) => (
    <StaticQuery
      query={graphql`
        query ShowCaseBoxQuery {
          allContentfulShowcaseBox {
            nodes {
              id
              header
              text {
                childMdx {
                body
                excerpt(pruneLength: 80)
                }
              }
              image {
                gatsbyImageData(width: 225, placeholder: BLURRED)
              }
            }
          }
        }
    `}
      render={data => (

          <div className="d-flex flex-wrap justify-content-between" style={{margin: "3em", maxWidth: "100%", gap: "22px"}}>
            {data.allContentfulShowcaseBox.nodes.map((box) => {
                const image = getImage(box.image)
                return(
                    <div key={box.id} style={{width: "14em"}} className="mb-5">
                      <GatsbyImage image={image} style={{marginBottom: "1em", width: "14em", height: "12em"}}/>
                      <h4 className="fett">{box.header}</h4>
                      <div
                        style={{
                            width: "90%"
                        }}>
                        <p style={{fontSize: "0.9em"}}>{box.text.childMdx.excerpt}</p>
                    <Button style={{background: "#589AAD", color: "#FBFBFD", border: "none", fontSize: "0.8em", padding: "0.2em 1.4em", borderRadius: "0"}}>mehr</Button>
                      </div>
                    </div>
                )
            })}
          </div>
      )}
    />
)


export default ShowCaseBox
