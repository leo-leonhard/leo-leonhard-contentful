import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


export default function Kunstwerk(props) {
    const kunstwerk = props.kunstwerk
    return(
        <div className="d-flex flex-wrap justify-content-between" style={{maxWidth: "100%", gap: "1em"}}>
          {kunstwerk.map(werk => {
              const image = getImage(werk.image)
              return(
                  <div className="d-flex flex-column mb-5"  style={{width: "20%"}}>
                    <Link to={werk.slug} style={{textDecoration: "none", color: "black"}}>
                    <h4 style={{height: "2em"}}>{werk.title}, {werk.year}</h4>
                  <GatsbyImage image={image}/>
                  </Link>
                  </div>
              )
          })}
        </div>
    )
}
