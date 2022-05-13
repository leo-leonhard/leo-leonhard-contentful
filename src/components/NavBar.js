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
                        <img className="signet" src={signet}/>
                        <img className="logo" style={{margin: "0 0.3em"}} src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse style={{width: "40%"}}>
              <Nav className="me-auto">
                            <Nav.Link href="/lebenslauf">LEBENSLAUF</Nav.Link>
                            <Nav.Link href="/malerei">MALEREI</Nav.Link>
                            <Nav.Link href="/grafik">GRAFIK</Nav.Link>
                            <Nav.Link href="/publikationen">PUBLIKATIONEN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar
