import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


const Banner = ({ data }) => {
    return (
        <>
        <StaticQuery
            query={graphql`
              query BannerQuery {
                allContentfulBannerImage {
                    nodes {
                        slug
                        image {
                          id
                          resize(width: 1200) {
                            width
                            height
                            src
                          }
                        }
                    }
                 }
              }
          `}
            render={data => (
                <div>
                    {data.allContentfulBannerImage.nodes.map((image) => {
                        return (
                            <div>
                                <img className="mb-5" src={image.image.resize.src} style={{float: "left", width: "100%", height: "90vh", objectFit: "cover"}}/>
                            </div>
                        )
                    })}

                </div>
            )}
        />
            <div>
                <p className="p-3 mt-5" style={{fontFamily: "EB Garamond, serif", fontSize: "1.3em"}}>Aliquam erat volutpat.  Nunc eleifend leo vitae magna.  In id erat non orci commodo lobortis.  Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus.  Sed diam.  Praesent fermentum tempor tellus.  Nullam tempus.  Mauris ac felis vel velit tristique imperdiet.  Donec at pede.  Etiam vel neque nec dui dignissim bibendum.  Vivamus id enim.  Phasellus neque orci, porta a, aliquet quis, semper a, massa.  Phasellus purus.  Pellentesque tristique imperdiet tortor.  Nam euismod tellus id erat.</p>
            </div>
            </>
    )
}


export default Banner
