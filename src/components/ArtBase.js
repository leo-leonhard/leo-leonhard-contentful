import React from 'react'

import Hippo from '../images/Hippo.jpg'
import Keiler from '../images/Keiler.jpg'
import Szene from '../images/Szene.jpg'
import Blues from '../images/Blues.jpg'

import Duerer from '../images/Duerer.jpg'
import Aufgang from '../images/Aufgang.jpg'
import Ex from '../images/Ex.jpg'
import Selbstportraet from '../images/Selbstportraet.jpg'



const ArtBase = () => {
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
]
}

export default ArtBase
