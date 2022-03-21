import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'


import artworks from '../components/ArtBase'
import vertical_artworks from '../components/ArtBase'


const GrafikPage = ({ data }) => {
    return (
        <Layout>
            <h2>DAS ZEICHNERISCHE WERK</h2>
            <hr />
            <div className="d-flex justify-content-between werke-container flex-wrap">
                {artworks.map(artwork => (
                    <div
                        key={artwork.slug}
                        className="mt-3 mb-3 d-flex flex-column justify-content-between werk"
                        style={{width: "23%"
                               }}>
                        <div className="mb-3">
                            <h3>{artwork.title},{artwork.year}</h3>
                            <h4>{artwork.type}</h4>
                        </div>
                        <Link to={artwork.slug}><img style={{width: "100%"}} src={artwork.image}/></Link>
                    </div>

                ))}


            </div>

            <hr />
            <div className="d-flex justify-content-between werke-container flex-wrap">
                {vertical_artworks.map(artwork => (
                    <div
                        key={artwork.slug}
                        className="mt-3 mb-3 d-flex flex-column justify-content-between werk"
                        style={{width: "23%"
                               }}>
                        <div className="mb-3">
                            <h3>{artwork.title},{artwork.year}</h3>
                            <h4>{artwork.type}</h4>
                        </div>
                        <img style={{width: "100%", maxHeight: "350px"}} src={artwork.image}/>
                    </div>

                ))}
            </div>
        </Layout>
    )
}



export default GrafikPage
