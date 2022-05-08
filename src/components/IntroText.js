import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql, StaticQuery } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

const IntroText = ({data}) => (
    <StaticQuery
      query={graphql`
                  query IntroTextQuery {
                     allContentfulIntroText {
                       nodes {
                        id
                        header
                        page
                        text {
                         childMdx {
                           body
                         }
                       }
                     }
                   }
                  }
               `}
      render={data => (
          <div style={{margin: "5em 3em"}}>
            {data.allContentfulIntroText.nodes.map((intro) => {
                console.log(intro)
                return(
                    <div key={intro.key}>

                      <h4 style={{fontWeight: "bold", marginBottom: "1em", maxWidth: "65ch"}}>{intro.header}</h4>
                      <div>
                      <MDXProvider>
                        <MDXRenderer>
                            {intro.text.childMdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                    </div>
                      {/* <div */}
                      {/*   dangerouslySetInnerHTML={{ */}
                      {/*       __html: intro.text.childMarkdownRemark.html, */}
                      {/*   }} */}
                      {/* ></div> */}
                    </div>
                )
            })}
          </div>
      )}
    />
)

export default IntroText
