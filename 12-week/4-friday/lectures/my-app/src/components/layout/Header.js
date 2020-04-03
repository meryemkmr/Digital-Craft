import React from 'react'
import {Navbar,Nav,Form} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Class Stuff</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Navbar>
  )
}

export default Header
