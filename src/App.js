import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import AddBooks from './component/addBooks';
import BooksList from './component/booksList';
import NavBar from './component/header/navBar';
import BookDataSerices from './services/books.services';
function App() {
  const [id, setid] = useState("");

  const bookEdite = (id) => {
       setid(id)
  }

  return (
    <div>
      <Row>
          <Col>
            <NavBar/>   
          </Col>
      </Row>
      <Row>
          <Col>
            <AddBooks
            editedBook = {id}
            setEditedBook = {setid}
            />   
          </Col>
      </Row>
      <Row>
          <Col>
              <BooksList 
              onEdit = {bookEdite}
              />
          </Col>
      </Row>
    </div>
  );
}

export default App;
