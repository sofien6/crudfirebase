import React from 'react'
import {Nav} from 'react-bootstrap'
const NavBar = () => {
  return (
    <div>
    <Nav  style={{backgroundColor:'#1B72E8',height:"80px",textAlign:'center'}}>
    <h1   style={{color:"white",margin:'0 auto',position:'relative',top:'15px'}}> Firebase CRUD App </h1>
    </Nav>
    </div>
  )
}

export default NavBar