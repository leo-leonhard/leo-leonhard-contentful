import React from 'react'

import VerzeichnisData from '../components/VerzeichnisData'

import '../styles/book.css'

export default function Verzeichnis() {
    return (
        <div>
            <h1 style={{ color: 'rgb(60, 159, 187)' }}>
                Verzeichnis der Bücher, Kataloge und Zeitschriften mit
                Abbildungen der Arbeiten Leo Leonhards
            </h1>
            <VerzeichnisData />
        </div>
    )
}
