import React from 'react'
import { qraphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'


function Banner (props) {
    const image = props.image
    console.log(image)
    image.map(img => {
        console.log(img.image)
    })
    return(
        <div>
          {image.map(img => {
              const image = getImage(img.image)
            return(
                  <div key={img.slug}>
                    <GatsbyImage className="mb-5" image={image} style={{float: "left", width: "100%", maxHeight: "100%", objectFit: "cover"}}/>
                  </div>
            )
        })}
        </div>
    )}


export default Banner
