import React from 'react'
import {Nav,Navbar,Container,Alert} from 'react-bootstrap'
const NavBar = () => {
  const variant = 'danger'
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
  <Alert key={variant} variant={variant}>
      This is a Demo version for Smatphones , 
      so its not responsive appliaction for computers (Laptop)
    </Alert>
    </div>
  )
}

export default NavBar