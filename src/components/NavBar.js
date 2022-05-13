import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown, Navbar, Container, Nav} from "react-bootstrap"

import '../styles/navbar.css'
import logo from '../images/logo_blue.png'
import signet from '../images/LL_Signet.png'

const NavBar = class extends React.Component {
    render() {
        return (
            <Navbar expand="lg" style={{width: "85%", margin: "0 auto"}}>
              <Container>
                <Navbar.Brand href="/">
                  <img className="signet" src={signet} style={{width: "2.5em"}} />
                  <img className="logo" style={{margin: "0 0.3em", width: "5.5em"}} src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                  <Nav className="me-auto">
                    <Nav.Link href="/lebenslauf">LEBENSLAUF</Nav.Link>
                    <NavDropdown title="MALEREI" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#oelgemaelde">Ölgemälde</NavDropdown.Item>
                      <NavDropdown.Item href="#aquarelle">Aquarelle</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="GRAFIK" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#zeichnungen">Zeichnungen</NavDropdown.Item>
                      <NavDropdown.Item href="#radierungen">Radierungen</NavDropdown.Item>
                      <NavDropdown.Item href="#holzschnitte">Holzschnitte</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/publikationen">PUBLIKATIONEN</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        )
    }
}

export default NavBar
