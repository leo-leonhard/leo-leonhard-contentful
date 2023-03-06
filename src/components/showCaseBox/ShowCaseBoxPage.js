import React from 'react'
import './showCaseBox.css'

export default function ShowCaseBoxPage({ alt, src, text }) {
    return (
        <section className="showcase-page">
            <img src={src} alt={alt} className="img-showcase" />
            <div className="showcase-text-page">{text}</div>
        </section>
    )
}
