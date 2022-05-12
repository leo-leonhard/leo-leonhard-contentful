import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

function IntroText(props) {
    const introdata = props.introdata
    return(
          <div style={{margin: "5em 3em"}}>
            {introdata.map((intro) => {
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
                    </div>
                )
            })}
          </div>
    )
}

export default IntroText
