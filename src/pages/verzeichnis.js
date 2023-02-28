import React from 'react'
import Layout from '../components/Layout'

import { publications } from '../utils/verzeichnisData'

//import '../styles/book.css'

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
                        <div className="verzeichnis-publications-elements">
                            <div>
                                <p>{year}</p>
                            </div>
                            <div>
                                {elements.map((element) => (
                                    <p>{element}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}
