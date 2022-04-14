import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


function Banner (props) {
    const image = props.image
    console.log(image)
    image.map(img => {
        console.log(img.image)
    })
    return(
        <div>
        {image.map(img => {
            return(
                  <div key={img.slug}>
                    <img className="mb-5" src={img.image.resize.src} style={{float: "left", width: "100%", height: "90vh", objectFit: "cover"}}/>
                  </div>
            )
        })}
        </div>
    )}


export default Banner
