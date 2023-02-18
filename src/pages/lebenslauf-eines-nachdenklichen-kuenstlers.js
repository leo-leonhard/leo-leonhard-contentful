import React from 'react'
import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxCard'

import image from '../assets/images/Lebenslauf eines nachdenklichen Künstlers.jpg'

const alt = 'Lebenslauf eines nachdenklichen Künstlers'
const text = (
    <p>
        Das Aquarell, eine der ältesten Maltechniken überhaupt, nimmt im Werk
        von Leo Leonhard einen bedeutenden Platz ein. Die Arbeit mit
        nicht-deckenden Wasserfarben wurde vor allem durch Albrecht Dürer
        aufgewertet, doch dienten sie ihm vor allem zu Studienzwecken und zur
        Vorbereitung von Ölgemälden. Schließlich war es der
        experimentierfreudige William Turner, der das Aquarell zur
        eigenständigen Kunstform entwickelte. In der Tradition der Kunst des 19.
        Jahrhunderts und vieler Künstler der Klassischen Moderne aquarellierte
        auch Leo Leonhard vor allem auf seinen Reisen, zum Teil auch unter
        freiem Himmel: Das Aquarellieren war ihm eine lebensbegleitende
        künstlerische Praxis.
    </p>
)
export default function Werke() {
    return (
        <Layout>
            <Template src={image} text={text} alt={alt} />
        </Layout>
    )
}
