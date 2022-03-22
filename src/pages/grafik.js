import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
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

function GrafikPage({ data }) {
    const [horizontalImages, setHorizontalImages]=useState([]);
    const [verticalImages, setVerticalImages]=useState([]);

    useEffect(()=> {
        if(typeof window !== 'undefined'){
            data.artwork.nodes.map(artwork => {
                if(artwork.image.width > artwork.image.height){
                    setHorizontalImages(horizontalImages => [...horizontalImages, artwork]);
                    console.log("HORIZONTAL IMAGES: ", horizontalImages)
                } else{
                    setVerticalImages(verticalImages => [...verticalImages, artwork]);
                    console.log("VERTICAL IMAGES: ", verticalImages)
                }
            })
        }
    }, [data])

    return (
        <Layout>
            <h2>DAS ZEICHNERISCHE WERK</h2>
            <hr />
            <div className="d-flex justify-content-between werke-container flex-wrap">
                {horizontalImages.map(artwork => (
                    <div key={`artwork-${artwork.slug}`} className="mt-1 mb-1 d-flex flex-column justify-content-between werk-horizontal" style={{width: "23%"}}>
                        <div className="mb-3">
                            <h3>{artwork.title},{artwork.year}</h3>
                            <h4>{artwork.type}</h4>
                        </div>
                        <Link to={artwork.slug}><img style={{width: "100%"}} src={artwork.image.url} alt={artwork.title}/></Link>
                    </div>
                ))}
                <hr/>
                {verticalImages.map(artwork => (
                    <div key={`artwork-${artwork.slug}`} className="mt-3 d-flex flex-column justify-content-between werk-vertical" style={{width: "23%"}}>
                        <div className="mb-3">
                            <h3>{artwork.title},{artwork.year}</h3>
                            <h4>{artwork.type}</h4>
                        </div>
                        <Link to={artwork.slug}><img style={{width: "100%"}} src={artwork.image.url} alt={artwork.title}/></Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}



export default GrafikPage
