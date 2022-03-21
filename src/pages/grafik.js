import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

import Hippo from '../images/Hippo.jpg'
import Keiler from '../images/Keiler.jpg'
import Szene from '../images/Szene.jpg'
import Blues from '../images/Blues.jpg'

import Duerer from '../images/Duerer.jpg'
import Aufgang from '../images/Aufgang.jpg'
import Ex from '../images/Ex.jpg'
import Selbstportraet from '../images/Selbstportraet.jpg'




// horizontal
const artworks = [
    {
        title: "Hippo",
        year: "1984",
        type: "Bleistift auf Papier",
        image: Hippo,
        slug: "hippo"
    },
    {
        title: "Keiler",
        year: "1984",
        type: "Bleistift auf Papier",
        image: Keiler,
        slug: "keiler"
    },
    {
        title: "Häusliche Szene",
        year: "1984",
        type: "Radierung",
        image: Szene,
        slug: "haeusliche_szene"
    },
    {
        title: "BLUES BROTHERS",
        year: "1985",
        type: "Radierung",
        image: Blues,
        slug: "blues_brothers"
    },
]

//vertical
const vertical_artworks = [
    {
        title: "DÜRER MALT DEN KAISER",
        year: "1986",
        type: "Radierung",
        image: Duerer,
        slug: "duerer"
    },
    {
        title: "Aufgang",
        year: "1987",
        type: "Radierung",
        image: Aufgang,
        slug: "aufgang"
    },
    {
        title: "Ex Libris",
        year: "1987",
        type: "Radierung",
        image: Ex,
        slug: "ex_libris"
    },
        {
        title: "Selbstportraet",
        year: "1986",
        type: "Radierung",
        image: Selbstportraet,
        slug: "selbstportraet"
    },
    // {
    //     title: "Selbstporträt",
    //     year: "1989",
    //     type: "Radierung",
    //     image: Selbstportraet,
    //     slug: "selbstportraet"
    // },
]

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
