import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown, Navbar, Container, Nav} from "react-bootstrap"



const NavBar = class extends React.Component {
  render() {
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">LEO LEONARD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">LEBENSLAUF</Nav.Link>
              <Nav.Link href="/malerei">MALEREI</Nav.Link>
              <Nav.Link href="#link">GRAFIK</Nav.Link>
              <Nav.Link href="#link">PUBLIKATIONEN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar
