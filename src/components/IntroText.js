import React from "react"
// import { graphql, StaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

function IntroText(props) {
    const introdata = props.introdata

    const cardStyle = {
       minHeight: "100vh",
       display: "grid",
       placeItems: "center"
    }

    const headingText = {
        marginBottom: "0.8em",
        maxWidth: "65ch",
        fontSize: "2.25rem"
    }

    const paragraphStyle = {
      fontSize: "0.95rem",
      lineHeight: "1.8"
    }


    return(
        <div style={cardStyle}>
          {introdata.map((intro) => {
              return(
                  <div key={intro.key}>
                    <div>
                      <h1
                        className="fett"
                        style={headingText}>
                        {intro.header}
                      </h1>
                      <div style={paragraphStyle}>
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
