import React from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/images/logo_white.png'

import './footer-style.css'

// TODO
// * separate the styles
// * create a cleaner component
// and iterate through the elements
// * use grid to improve performance and responsiveness

const Footer = () => (
    <div className="footer">
        <div
            className="d-flex flex-column justify-content-between"
            style={{ height: 'auto' }}
        >
            <div>
                <Link to="/">
                    <img
                        style={{ width: '10em' }}
                        alt="write something"
                        src={logo}
                    />
                </Link>
                <address className="address-style">
                    <ul>
                        <li>LEO LEONHARD NACHLASS</li>
                        <li>Florian Leonhard</li>
                        <li>Sandstraße 18</li>
                        {/*
                         * //TODO
                         * check with time a way to offuscate mailto
                         * */}
                        <li>
                            <a
                                href="mailto:info@leo-leonhard.de"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                info@leo-leonhard.de
                            </a>
                        </li>
                    </ul>
                </address>
            </div>
        </div>
        <div style={{ width: '90%' }}>
            <div className="d-flex footer-nav">
                <div className="footer-nav-item">
                    <hr />
                    <div style={{ height: '100%' }}>
                        <Link to="/lebenslauf">LEBENSLAUF</Link>
                        <div
                            className="d-flex flex-column"
                            style={{ fontSize: '0.9em' }}
                        >
                            <Link to="/lebensstationen">Lebensstationen</Link>
                            <Link to="/nachruf">Nachruf</Link>
                            <Link to="/auszeichnungen">Auszeichnungen</Link>
                            <Link to="/ausstellungen">Ausstellungen</Link>
                        </div>
                    </div>

                    <hr className="hidden-on-tablet" />
                </div>

                <div className="footer-nav-item">
                    <hr />
                    <div style={{ height: '100%' }}>
                        <Link to="/malerei">MALEREI</Link>
                        <div
                            className="d-flex flex-column"
                            style={{ fontSize: '0.9em' }}
                        >
                            <Link to="/malerei#oelgemaelde">Ölgemälde</Link>
                            <Link to="/malerei#aquarelle">Aquarelle</Link>
                        </div>
                    </div>
                    <hr className="hidden-on-tablet" />
                </div>

                <div className="footer-nav-item">
                    <hr />
                    <div style={{ height: '100%' }}>
                        <Link to="/grafik">GRAFIK</Link>
                        <div
                            className="d-flex flex-column"
                            style={{ fontSize: '0.9em' }}
                        >
                            <Link to="/grafik#zeichnungen">Zeichnungen</Link>
                            <Link to="/grafik#radierungen">Radierungen</Link>
                            <Link to="/grafik#holzschnitte">Holzschnitte</Link>
                            <Link to="/grafik#lithografie">Lithografie</Link>
                            <Link to="/grafik#mappenwerke">Mappenweke</Link>
                        </div>
                    </div>
                    <hr className="hidden-on-tablet" />
                </div>

                <div className="footer-nav-item">
                    <hr />
                    <div style={{ height: '100%' }}>
                        <Link to="/publikationen">PUBLIKATIONEN</Link>
                        <div
                            className="d-flex flex-column"
                            style={{ fontSize: '0.9em' }}
                        >
                            <Link to="/verzeichnis">Verzeichnis</Link>
                        </div>
                    </div>
                    <hr className="hidden-on-tablet" />
                </div>

                <div className="footer-nav-item">
                    <hr />
                    <div
                        className="d-flex flex-column"
                        style={{ height: '100%' }}
                    >
                        <Link to="/impressum">IMPRESSUM</Link>
                        <Link to="/impressum/#datenschutzerklaerung">
                            DATENSCHUTZ
                        </Link>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
)

export default Footer
