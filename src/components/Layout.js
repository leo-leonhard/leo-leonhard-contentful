import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'

import NavBar from './NavBar'
import Footer from './footer/Footer'

import CookieBanner from './Cookie/CookieBanner'

// import { Cookies } from 'react-cookie-consent'

export default function Layout({ children }) {
    // const consent = Cookies.get('leoLeonhardCookieWebsite')
    return (
        <>
            <NavBar />

            {/* 
            //TODO set options in case user don't accept cookies
            {consent 
                ? <main className="main-layout">{children}</main> 
                : null
            } 
            */}

            <main className="main-layout">{children}</main>
            <CookieBanner />
            <Footer />
        </>
    )
}
