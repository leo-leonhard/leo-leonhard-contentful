import React from "react"
// import { graphql, StaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

function IntroText(props) {
    const introdata = props.introdata
    return(
        <div style={{margin: "1em 3em"}}>
          {introdata.map((intro) => {
              return(
                  <div key={intro.key}>
                    <div>
                      <h1
                        className="fett"
                        style={{
                            marginBottom: "0.8em",
                            maxWidth: "65ch",
                            fontSize: "1.25em"
                        }}>
                        {intro.header}
                      </h1>
                      <div style={{fontSize: "0.9em"}}>
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
