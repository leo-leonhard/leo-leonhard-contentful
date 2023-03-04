import React from 'react'
import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxCard'

import image from '../assets/images/Werke zur deutschen Literatur.jpg'

const alt = 'Werke zur deutschen Literatur'
const text = (
    <p>
        In den Schaffensjahren von Leo Leonhard war die Wechselbeziehung
        zwischen Wort und Bild, zwischen Literatur und bildender Kunst von
        größerer Bedeutung als heute. Viele Künstler waren Grenzgänger zwischen
        Bildender Kunst und Literatur. Und so auch Leo Leonhard: Seine
        künstlerische Praxis war vielfach durch die Literatur geprägt. Das Werk
        Georg Büchners stellte einen Schwerpunkt seiner Arbeit dar – er hat sich
        aber auch mit anderen Autoren wie Franz Kafka, Robert Walser, Edgar
        Allen Poe, Ezra Pound, Christian Dietrich Grabbe, Christoph Martin
        Wieland, Georg Christoph Lichtenberg oder Johann Wolfgang von Goethe
        beschäftigt und deren Werke illustriert. Diese Nähe zu der Literatur
        spiegelt sich aber auch in seiner Ölmalerei. Und es war Hugo von
        Hofmannsthal, den er immer wieder gerne zitiert hat: „Die Tiefe muss man
        verstecken. Wo? An der Oberfläche.“
    </p>
)

export default function Werke() {
    return (
        <Layout>
            <section className="standard-layout-width">
                <Template src={image} text={text} alt={alt} />
            </section>
        </Layout>
    )
}
