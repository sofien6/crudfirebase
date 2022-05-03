import React , {useState} from 'react'
import { Row,Col } from 'react-bootstrap';
import BooksList from '../booksList';
import AddBooks from '../addBooks';
const BookProject = () => {

    const [id, setid] = useState("");

    const bookEdite = (id) => {
         setid(id)
    }

    
  return (
<div>
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
    
  )
}

export default BookProject