import React from 'react'
// import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap'

import logo from '../assets/images/logo_blue.png'
import signet from '../assets/images/LL_Signet.png'

const NavBar = class extends React.Component {
    render() {
        return (
            <Navbar
                id="header"
                expand="lg"
                style={{ width: '75%', margin: '0 auto' }}
            >
                <Container>
                    <Navbar.Brand href="/" className="logo-signet">
                        <img className="signet" src={signet} alt="text" />
                        <img className="logo" src={logo} alt="text" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto" style={{ fontSize: '0.9em' }}>
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/lebenslauf">LEBENSLAUF</Nav.Link>

                            <NavDropdown
                                title="MALEREI"
                                id="basic-nav-dropdown"
                            >
                                <Nav.Link href="/malerei">Malerei</Nav.Link>
                                <NavDropdown.Item
                                    style={{ fontSize: '0.9em' }}
                                    href="/malerei#oelgemaelde"
                                >
                                    Ölgemälde
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    style={{ fontSize: '0.9em' }}
                                    href="/malerei#aquarelle"
                                >
                                    Aquarelle
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="GRAFIK" id="basic-nav-dropdown">
                                <Nav.Link href="/grafik">Grafik</Nav.Link>
                                <NavDropdown.Item
                                    style={{ fontSize: '0.9em' }}
                                    href="/grafik#zeichnungen"
                                >
                                    Zeichnungen
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    style={{ fontSize: '0.9em' }}
                                    href="/grafik#radierungen"
                                >
                                    Radierungen
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    style={{ fontSize: '0.9em' }}
                                    href="/grafik/#holzschnitte"
                                >
                                    Holzschnitte
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/publikationen">
                                PUBLIKATIONEN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar
