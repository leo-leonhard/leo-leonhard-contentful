import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown, Navbar, Container, Nav} from "react-bootstrap"

import logo from '../images/logo.png'
import signet from '../images/LL_Signet.png'

const NavBar = class extends React.Component {
    render() {
        return (
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/"><span>
                                               <img style={{color: "#589AAD", maxWidth: "50px"}} src={signet}/>
                                               <img style={{color: "#589AAD", margin: "0 0.3em", maxWidth: "18%"}} src={logo}/>
                                           </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">LEBENSLAUF</Nav.Link>
                            <Nav.Link href="#">MALEREI</Nav.Link>
                            <Nav.Link href="/grafik">GRAFIK</Nav.Link>
                            <Nav.Link href="#">PUBLIKATIONEN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar
