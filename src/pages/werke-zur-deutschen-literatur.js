import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import w from '../images/Werke zur deutschen Literatur.jpg'

export default function Werke() {
    return (
        <div>
            <NavBar />
            <div style={{ width: '75vw', margin: '0 auto' }}>
                <img
                    src={w}
                    alt="text"
                    style={{ height: '75vh', width: '75vw', margin: '0 auto' }}
                />
                <div className="mt-4 mb-5">
                    <p>
                        In den Schaffensjahren von Leo Leonhard war die
                        Wechselbeziehung zwischen Wort und Bild, zwischen
                        Literatur und bildender Kunst von größerer Bedeutung als
                        heute. Viele Künstler waren Grenzgänger zwischen
                        Bildender Kunst und Literatur. Und so auch Leo Leonhard:
                        Seine künstlerische Praxis war vielfach durch die
                        Literatur geprägt. Das Werk Georg Büchners stellte einen
                        Schwerpunkt seiner Arbeit dar – er hat sich aber auch
                        mit anderen Autoren wie Franz Kafka, Robert Walser,
                        Edgar Allen Poe, Ezra Pound, Christian Dietrich Grabbe,
                        Christoph Martin Wieland, Georg Christoph Lichtenberg
                        oder Johann Wolfgang von Goethe beschäftigt und deren
                        Werke illustriert. Diese Nähe zu der Literatur spiegelt
                        sich aber auch in seiner Ölmalerei. Und es war Hugo von
                        Hofmannsthal, den er immer wieder gerne zitiert hat:
                        „Die Tiefe muss man verstecken. Wo? An der Oberfläche.“
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
