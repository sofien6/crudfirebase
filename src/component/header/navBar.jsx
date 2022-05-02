import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
const NavBar = () => {
  return (
    <div style={{width:"100%"}} className='navBarParent'>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Features</Nav.Link>
      <Nav.Link href="#">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar