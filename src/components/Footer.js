import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo_white.png'

import '../styles/footer-style.css'

const Footer = () => (
    <div className="footer">
      <div className="d-flex flex-column justify-content-between" style={{height: "auto"}}>
        <div>
        <Link to="/"><img style={{width: "10em"}} src={logo}/></Link>
        <address style={{fontSize: "0.7em"}}>
          LEO LEONHARD NACHLASS<br/>
          Florian Leonhard<br/>
          Sandstraße 18<br/>
          64404 Bickenbach<br/>
          info@leoleonhard.de<br/>
    </address>
    </div>
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
            <div style={{ height: "100%"}}>
              <Link to="/lebenslauf">LEBENSLAUF</Link>
            </div>
            <hr className="hidden-on-tablet"/>
          </div>
          <div className="footer-nav-item">
            <hr/>
            <div style={{ height: "100%"}}>
              <Link to="/malerei">MALEREI</Link>
              <div className="d-flex flex-column" style={{fontSize: "0.9em"}}>
                <Link to="/malerei#oelgemaelde">Ölgemälde</Link>
                <Link to="/malerei#aquarelle">Aquarelle</Link>
              </div>
            </div>
            <hr className="hidden-on-tablet"/>
          </div>
          <div className="footer-nav-item">
            <hr/>
            <div style={{ height: "100%"}}>
              <Link to="/grafik">GRAFIK</Link>
              <div className="d-flex flex-column" style={{fontSize: "0.9em"}}>
                <Link to="/grafik#zeichnungen">Zeichnungen</Link>
                <Link to="/grafik#radierungen">Radierungen</Link>
                <Link to="/grafik#holzschnitte">Holzschnitte</Link>
              </div>
            </div>
            <hr className="hidden-on-tablet"/>
          </div>
          <div className="footer-nav-item">
            <hr/>
            <div style={{ height: "100%"}}>
              <Link to="/publikationen">PUBLIKATIONEN</Link>
            </div>
            <hr className="hidden-on-tablet"/>
          </div>
          <div className="footer-nav-item">
            <hr/>
            <div className="d-flex flex-column" style={{ height: "100%"}}>
              <Link to="/impressum">IMPRESSUM</Link>
              <Link to="/impressum/#datenschutzerklaerung">DATENSCHUTZ</Link>
              <Link to="">PRESSE</Link>
              <Link to="/contact">KONTAKT</Link>
            </div>
            <hr/>
          </div>
        </div>
    <div className="mt-3 copyright hidden-on-tablet">
      <p style={{fontSize: "0.8em"}}>Copyright © 2022 Leo Leonhard Nachlass. All rights reserved. Build by <a style={{textDecoration: "none", color: "white"}} href="https://hannarosenfeld.com/">Hanna Rosenfeld.</a></p>
        </div>
      </div>
    </div>
)

export default Footer
