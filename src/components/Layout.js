import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import Footer from './footer/Footer'
import '../styles/styles.css'

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main className="main-layout">{children}</main>
            <Footer />
        </>
    )
}
