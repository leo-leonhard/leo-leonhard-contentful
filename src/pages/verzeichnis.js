import React from 'react'
import Layout from '../components/Layout'
import { SEO } from '../components/Seo'

import { publications } from '../utils/verzeichnisData'

import '../styles/book.css'

export default function Verzeichnis() {
    return (
        <Layout>
            <section className="standard-layout-width">
                <h1 className="verzeichnis-header">
                    Verzeichnis der Bücher, Kataloge und Zeitschriften mit
                    Abbildungen der Arbeiten Leo Leonhards
                </h1>

                <div className="verzeichnis-publications">
                    {publications.map(({ year, elements }) => (
                        <div
                            className="verzeichnis-publications-elements"
                            key={elements.id}
                        >
                            <div>
                                <p>{year}</p>
                            </div>
                            <div>
                                {elements.map((element) => (
                                    <p key={element.id}>{element}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}
export const Head = () => <SEO />
