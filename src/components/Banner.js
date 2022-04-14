import React from 'react'
import { StaticQuery, graphql } from 'gatsby'



function Banner (props) {
    const image = props.image
    console.log(image)
    return(
        <div>
                  <div key={props.page}>
                    <img className="mb-5" src={props.page} style={{float: "left", width: "100%", height: "90vh", objectFit: "cover"}}/>
                  </div>
        </div>
    )}


export default Banner
