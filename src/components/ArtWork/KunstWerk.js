import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

export default function Kunstwerk(props) {
    const kunstwerk = props.kunstwerk
    return(
        <div>
          <br/>
        <div
          className="d-flex flex-wrap"
        >
          {kunstwerk.map(werk => {
              const image = getImage(werk.image)
              return(
                  <div
                    className="d-flex flex-column mb-5"
                    style={{
                        width: "15em",
                        marginRight: "8%",
                        flexWrap: "wrap"
                    }}
                  >
                    <Link
                      to={werk.slug}
                      style={{
                          textDecoration: "none",
                          color: "black",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "100%"
                      }}
                    >
                      <h4 style={{minHeight: "2em"}}>{werk.title}, {werk.year}</h4>
                      <BgImage
                        image={image}
                        style={{maxHeight: "100%", objectFit: "contain", height: "15em"}}
                      />
                    </Link>
                  </div>
              )
          })}
        </div>
</div>
    )
}
