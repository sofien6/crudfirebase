import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
const NavBar = () => {
  return (
    <div style={{width:"100%"}} className='navBarParent'>
  <Navbar style={{backgroundColor:'#333333'}} variant="dark">
    <Container>
    <Navbar.Brand href="/">DzBrain</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Books">Books</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar