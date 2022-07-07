import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

function IntroText(props) {
    const introdata = props.introdata
    return(
          <div style={{margin: "2em 3em"}}>
            {introdata.map((intro) => {
                console.log(intro)
                return(
                    <div key={intro.key}>
                      <div>
                      <h1 style={{fontWeight: "bold", marginBottom: "1em", maxWidth: "65ch"}}>{intro.header}</h1>
                    <div style={{fontSize: "1.3em"}}>
                      <MDXProvider>
                        <MDXRenderer>
                            {intro.text.childMdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                    </div>
                    </div>
                    </div>
                )
            })}
          </div>
    )
}

export default IntroText
