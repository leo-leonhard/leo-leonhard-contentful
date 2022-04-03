import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import Footer from './Footer'
import '../styles/styles.css'

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main style={{width: "90%", margin: "0 auto", padding: "0.5em 0"}}>
                {children}
            </main>
            <Footer/>
        </>
    )
}
