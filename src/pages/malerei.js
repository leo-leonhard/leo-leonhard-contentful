import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const query = graphql`
{
  artwork: allContentfulArtwork {
    nodes {
      title
      year
      type
      slug
      image {
        url
        width
        height
      }
    }
  }
}
`



const MalereiPage = ({ data }) => {
    const [topImages, setTopImages]=useState([]);
    const [bottomImages, setBottomImages]=useState([]);

    useEffect(()=>{
            data.artwork.nodes.map(artwork=>{
                if(artwork.image.width > window.innerWidth){
                    setTopImages(topImages.push(artwork))
                } else{
                    setBottomImages(bottomImages.push(artwork))
                }
            })

    }, [data])


    return (
        <Layout>
            <h2>DAS ZEICHNERISCHE WERK</h2>
            <hr />
            <div className="d-flex justify-content-between werke-container flex-wrap">
                {data.artwork.nodes.map(artwork => (
                    <div key={`artwork-${artwork.slug}`} className="mt-3 d-flex flex-column justify-content-between werk" style={{width: "23%"}}>
                        <div className="mb-3">
                            <h3>{artwork.title},{artwork.year}</h3>
                            <h4>{artwork.type}</h4>
                        </div>
                        <img style={{width: "100%"}} src={artwork.image.url}/>
                    </div>
                ))}
            </div>
        </Layout>
    )
}



export default MalereiPage
