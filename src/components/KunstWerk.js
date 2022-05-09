import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"



export default function Kunstwerk(props) {
    const kunstwerk = props.kunstwerk
    return(
        <div className="d-flex flex-wrap justify-content-between">
        {kunstwerk.map(werk => {
            const image = getImage(werk.image)
            return(
                <div className="d-flex flex-column">
                  <h3>{werk.title}, {werk.year}</h3>
                  <GatsbyImage image={image}/>
                </div>
            )
        })}
        </div>
    )
}
