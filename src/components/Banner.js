// Banner with a textbox sourced from contentful model

import React from 'react'
import { qraphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { BgImage } from 'gbimage-bridge';
import { converToBgImage } from "gbimage-bridge"
import '../styles/banner-style.css'


function Banner (props) {
    const image = props.image
    return(
        <div className="mt-4">
          {image.map(img => {
              const image = getImage(img.image)
              return(
                  <div key={img.slug}>
                    <BgImage className="mb-5 d-flex align-items-end" image={image} style={{maxHeight: "100%", objectFit: "contain",height: "93vh"}}>
                      <div className="banner-text-box" style={{padding: "1em 2em",color: "#FBFBFD", background: "rgba(95,149,169,0.8)"}}>
                    <p style={{textTransform: "uppercase", fontWeight: "bold"}}>{img.title}</p>
                        <MDXProvider>
                          <MDXRenderer>
                            {img.text.childMdx.body}
                          </MDXRenderer>
                        </MDXProvider>
                      </div>
                    </BgImage>
                  </div>
              )
          })}
        </div>
    )}


export default Banner
