import React from 'react'
import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxCard'

import image from '../assets/images/Das Frühwerk.jpg'
const alt = 'Das Frühwerk'

const text = (
    <>
        <p>
            Nach einem Studium der Germanistik studierte Leo Leonhard 1961 bis
            1964 an der bedeutenden Kunstakademie in Düsseldorf. Hier wurde der
            Grafiker und Bildhauer Otto Coester sein Lehrer, der vor dem Krieg
            intensiven Kontakt zu Alfred Kubin pflegte, selbst bei Gerhard
            Marcks studiert hatte und 1959 an der documenta II teilnahm. Über
            Coester ist Leo Leonhard so mit der Tradition der
            Vorkriegsavantgarde verbunden, vor allem auch mit
            surrealistisch-phantastischen Tendenzen der Kunst.
        </p>

        <p>
            Am Anfang seines Werks stehen die informellen Abstraktionen der
            späten 1950er und 1960er Jahre. Seine erste Einzelausstellung hat
            Leo Leonhard im Jahr 1966 in der Galerie von Christa Moering in
            Wiesbaden, die 1956 eröffnet wurde. Hier verkehrten unter anderem
            Künstler wie Ludwig Meidner oder auch Ernst Wilhelm Nay. Die Phase
            der Abstraktion mit Arbeiten wie „Von Gelb zu Violett“ (1959) oder
            „Jeanne d’Arc (1959) endet vorerst schon 1961 mit Hommagen an
            Gainsborough und Velázquez. 1962 zeigt sich Leonhard, erst knapp
            über 20 Jahre alt, in einem Selbstporträt „Selbst als alter
            Meister“.
        </p>

        <p>
            Danach nimmt Leonhard die abstrakte Malerei mit Einflüssen so
            unterschiedlicher Maler wie etwa Nay, Klee oder Bacon wieder auf, um
            erst im Jahr 1970 mit Arbeiten wie „Der Plattenhof“ und „Hamms
            Vision“ oder, 1971, „Der Gotteslachs“ sein Frühwerk zu beenden und
            einen neuen, surrealistisch-phantastischen Ausdruck zu finden.
        </p>
    </>
)

export default function Frühwerk() {
    return (
        <Layout>
            <section className="standard-layout-width">
                <Template src={image} text={text} alt={alt} />
            </section>
        </Layout>
    )
}
