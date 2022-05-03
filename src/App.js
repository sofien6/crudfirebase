import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NavBar from './component/header/navBar'
import BookProject from './component/bookProject/bookProject'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/login/login'
import './App.css';
import Home from './component/home/Home'
function App() {
 
  return (
    <div>
      <Row>
          <Col>
            <NavBar/>   
          </Col>
      </Row>
      <Row>
        <Col>
    <BrowserRouter>
      <Routes>
          <Route   exact  path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Books" element={<BookProject />} />
      </Routes>
    </BrowserRouter>
        </Col>
      </Row>
    </div>
  );
}

export default App;
