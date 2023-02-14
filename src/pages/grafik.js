import React from 'react'
import { graphql } from 'gatsby'
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Radierungen from '../components/ArtWork/Grafik/Radierungen'
import Zeichnungen from '../components/ArtWork/Grafik/Zeichnungen'
import Holzschnitte from '../components/ArtWork/Grafik/Holzschnitte'

const GrafikPage = ({ data }) => (
    <Layout>
        <PageBanner image={data.allContentfulPageBanner.nodes} />
        <IntroText introdata={data.allContentfulIntroText.nodes} />

        <div className="mt-5 mb-5">
            <hr />
        </div>

        <div id="zeichnungen">
            <h2>Zeichnungen</h2>
            <div className="mt-3 mb-4">
                <p>
                    Bleistiftzeichnungen, Kreidezeichnungen, Tuschezeichnungen –
                    Leo Leonhard hat seine Zeichnungen immer wieder in Einzel-
                    und Gruppenausstellungen gezeigt. Hier, in seinen
                    Zeichnungen und Radierungen, spiegelt sich, wie es Dr.
                    Roland Held formuliert hat, im Besonderen sein „Interesse an
                    Dichtung und Theater, Geschichte und Politik“.
                </p>
                <p>
                    Leo Leonhard selbst beschreibt den Prozess des Zeichnens so:
                    „Beginne mit den Zeichnungen zur Buchausgabe. Es sollen
                    textbegleitende, im Wesentlichen dialogische Illustrationen
                    werden, wobei ich besonders die Eigenarten von Rohrfeder und
                    Federkiel nutzen will zur Charakterisierung von Personen und
                    Situationen. Aber auch die Kombination mit der Stahlfeder
                    und der rauen Papierart, auf der die Tusche leicht auslaufen
                    kann, soll Ausdruckswerte hervorrufen, die jede gefällige
                    Oberflächlichkeit verhindern. Es wird Linien und Strukturen
                    geben, die sich der Umrissbeschreibung, Proportion oder
                    manchen Details nicht mehr fügen, ausbrechen, sich
                    verselbständigen, spröde der eigentlich zu erwartenden
                    Linienführung sich widersetzen, um Verletzungen, Isolation,
                    Wahnsinn, Verwirrung, Starrheit, Enge, Auflösung etc. zu
                    symbolisieren …“
                </p>
            </div>
            <Zeichnungen />
        </div>

        <div className="mt-5 mb-5">
            <hr />
        </div>

        <div id="radierungen">
            <h2>Radierungen</h2>
            <div className="mt-3 mb-4">
                <p>
                    Die Kunst der Radierung nimmt in Leo Leonhards
                    druckgrafischem Werk eine zentrale Position ein. Er hat
                    Architekturdetails radiert – große Originalradierungen
                    entstanden zu Ezra Pounds „Cantos“. Er zeigte sich selbst
                    als „Künstler bei der Arbeit“ oder „Lichtenbergs Begegnung
                    mit Hogarth“, erschuf eine Mappe mit Radierungen aus
                    „Motiven der Bergstrasse“ oder zur Darmstädter
                    Mathildenhöhe, zum „Hessischen Landboten“ oder „Dantons Tod“
                    von Büchner, zu Becketts „Endspiel“, zu Goethes Schauspiel
                    „Das Jahrmarktsfest zu Plundsweilern“ – und kreierte auch
                    diverse Ex Libiris-Radierungen. Es ist der Bedeutung der
                    Radierung und der Holzschnitte in Leo Leonhards Werk
                    angemessen, dass mit den beiden Werkverzeichnissen zwei
                    Publikationen erscheinen konnten, welche diese beiden
                    Werkgruppen ausführlich darstellen. Radierungen von Leo
                    Leonhard erschienen in Auflagen bis zu 100 Exemplaren.
                </p>
            </div>
            <Radierungen />
        </div>

        <div className="mt-5 mb-5">
            <hr />
        </div>

        <div id="holzschnitte">
            <h2>Holzschnitte</h2>
            <div className="mt-3 mb-4">
                <p>
                    Auch der Holzschnitt ist im Werk von Leo Leonhard von
                    Bedeutung, wenngleich auch weniger vertreten als die
                    Radierung. Wunderbare Beispiele dieser Kunst sind etwa die
                    Holzschnitte zu Becketts „Endspiel“, ein Holzschnitt zu
                    Georg Trakls „Kaspar Hauser Lied“ oder der Holzschnitt
                    „Geschwister“ von 1993, der unter anderem auf leicht
                    gelblichem Japanpapier gedruckt wurde.
                </p>
            </div>

            <Holzschnitte />
        </div>

        <div className="mt-5 mb-5">
            <hr />
        </div>

        <div id="lithographie">
            <h2>Lithographie</h2>
            <div className="mt-3 mb-4">
                <p>
                    Auch Lithographien hat Leo Leonhard geschaffen, wie etwa das
                    in einer Auflage von 300 Exemplaren erschienene, große Blatt
                    „Samurai“, das einen weiblichen Krieger, eine sich wehrende
                    Frau zeigt. Die Arbeit ist als feministisches Bild eines
                    männlichen Künstlers interpretiert worden – als Votum gegen
                    eine „maskuline Beherrschung der Welt“. „Samurai“ ist mit
                    seinen auffälligen Rot-, Gelb- und Orangetönen ein
                    hervorragendes Beispiel der farbintensiven Kunst Leonhards –
                    ein Blatt, das auch Jahre nach seiner Entstehung nichts von
                    seiner Aktualität verloren hat.
                </p>
            </div>

            {/* <Holzschnitte/> */}
        </div>

        <div className="mt-5 mb-5">
            <hr />
        </div>

        <div id="mappenwerke">
            <h2>Mappenwerke</h2>
            <div className="mt-3 mb-4">
                <p>
                    Neben vielen druckgrafischen Einzelblättern und
                    Buchillustrationen hat Leo Leonhard auch große, wunderbar
                    ausgestattete und gebundene Mappenwerke mit
                    Original-Radierungen und auch Federzeichnungen geschaffen.
                    Es entstanden etwa Mappen zu „Motiven der Bergstrasse“, zu
                    dem Drama „Dantons Tod“ von Georg Büchner und zu Büchners
                    „Hessischem Landboten“. Eine andere Mappe zur Mathildenhöhe
                    Darmstadt trägt den Titel „Seine Welt zeige der Künstler,
                    die niemals war, noch jemals sein wird“. Weiterhin schuf
                    Leonhard Mappen zu den Gesängen von Ezra Pound, eine
                    „Hommage à Goethe“ und zu Goethes Schwank „Jahrmarktsfest zu
                    Plundersweilern“.
                </p>
            </div>

            {/* <Holzschnitte/> */}
        </div>
    </Layout>
)

export const query = graphql`
    query getGrafikContent {
        allContentfulPageBanner(filter: { slug: { eq: "grafik" } }) {
            nodes {
                slug
                image {
                    id
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
        allContentfulIntroText(filter: { slug: { eq: "grafik" } }) {
            nodes {
                id
                slug
                header
                page
                text {
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`

export default GrafikPage
