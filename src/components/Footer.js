import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo_white.png'

import '../styles/footer-style.css'

const Footer = () => (
    <div className="footer">
        <div>
            <Link to="/"><img src={logo}/></Link>
          <address style={{margin: "1em auto"}}>
                LEO LEONHARD NACHLASS<br/>
                c/o Florian Leonhard<br/>
                Strasse 12<br/>
                12345 Stadt<br/>
                info@leoleonhard.de<br/>
            </address>
            <div className="copyright visible-on-tablet visible-on-mobile">
                <p>Copyright © 2022 Leo Leonhard Nachlass.
                    <br/>
                    All rights reserved.
                    <br/>
                Build by <a style={{textDecoration: "none", color: "white"}}href="https://hannarosenfeld.com/">Hanna Rosenfeld.</a></p>
            </div>
        </div>
        <div style={{width: "90%"}}>
        <div className="d-flex footer-nav">
            <div className="footer-nav-item">
                <hr/>
                <Link to="/lebenslauf">LEBENSLAUF</Link>
                <hr className="hidden-on-tablet"/>
            </div>
            <div className="footer-nav-item">
                <hr/>
                <Link to="/malerei">MALEREI</Link>
                <hr className="hidden-on-tablet"/>
            </div>
            <div className="footer-nav-item">
                <hr/>
                <Link to="/grafik">GRAFIK</Link>
                <hr className="hidden-on-tablet"/>
            </div>
            <div className="footer-nav-item">
                <hr/>
                <Link to="/publikationen">PUBLIKATIONEN</Link>
                <hr className="hidden-on-tablet"/>
            </div>
            <div className="footer-nav-item">
                <hr/>
                <Link to="/impressum">IMPRESSUM</Link>
                <Link to="">DATENSCHUTZ</Link>
                <Link to="">PRESSE</Link>
                <Link to="">CONTACT</Link>
                <hr/>
            </div>
        </div>
            <div className="copyright hidden-on-tablet">
                <p>Copyright © 2022 Leo Leonhard Nachlass. All rights reserved.
                <br/>Build by <a style={{textDecoration: "none", color: "white"}} href="https://hannarosenfeld.com/">Hanna Rosenfeld.</a></p>
                </div>
            </div>
    </div>
)

export default Footer
