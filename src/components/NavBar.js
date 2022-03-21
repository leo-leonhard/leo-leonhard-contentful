import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown, Navbar, Container, Nav} from "react-bootstrap"

import signet from '../images/LL_Signet.png'

const NavBar = class extends React.Component {
  render() {
    return (
      <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="/"><span><img style={{color: "#589AAD", width: "10%"}} src={signet}/>LEO LEONARD</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">LEBENSLAUF</Nav.Link>
              <Nav.Link href="#malerei">MALEREI</Nav.Link>
              <Nav.Link href="/grafik">GRAFIK</Nav.Link>
              <Nav.Link href="#link">PUBLIKATIONEN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar
