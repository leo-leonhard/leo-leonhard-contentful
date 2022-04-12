import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


const Banner = () => {

    return (
        <StaticQuery
            query={graphql`
              query BannerQuery {
                allContentfulBannerImage {
                    nodes {
                        slug
                        image {
                            gatsbyImage(width: 1200)
                            url
                        }
                    }
                 }
              }
          `}
            render={data => {
                {data.allContentfulBannerImage.nodes.map((image) => {
                    console.log(image)
                })}
            }}
       />
    )
}


export default Banner
