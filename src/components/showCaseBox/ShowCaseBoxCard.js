import React from 'react'
import './showCaseBox.css'

export default function ShowCaseBoxCard({ alt, src, text }) {
    return (
        <section className="section-showcase">
            <img src={src} alt={alt} className="img-showcase" />
            <div className="text-showcase">{text}</div>
        </section>
    )
}
