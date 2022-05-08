import React from "react"
import { graphql, StaticQuery } from "gatsby"
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

          <div className="d-flex" style={{margin: "3em"}}>
            {data.allContentfulShowcaseBox.nodes.map((box) => {
                const image = getImage(box.image)
                console.log(box.text.childMdx.excerpt)
                return(
                    <div key={box.id} style={{width: "25%"}}>
                      <GatsbyImage image={image} style={{marginBottom: "1em"}}/>
                      <h4>{box.header}</h4>
                      <div
                        style={{
                            width: "90%"
                        }}>
                            {box.text.childMdx.excerpt}

                    </div>
                    </div>
                )
            })}
          </div>
      )}
    />
)


export default ShowCaseBox
