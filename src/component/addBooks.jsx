import React, { useState,useEffect } from 'react'
import './addBooks.css'
import {Badge,Alert, InputGroup,Form,FormControl,ButtonGroup,Button} from 'react-bootstrap'
import BookDataSerices from '../services/books.services'
import AlertSucess from './alert/alertSccess'

const AddBooks = ({editedBook,setEditedBook}) => {



    const styleForm = {width:"70%",margin:"0 auto"}
    const [title, settitle] = useState("");
    const [author, setauthor] = useState("");
    const [status, setstatus] = useState("available");
    const [added, setadded] = useState("");



    
    const displayEditedBooks = async(editedBook) =>{ 
     try{
      const myEditedBook = await BookDataSerices.getBook(editedBook)
      setstatus(myEditedBook.data().status)
      setauthor(myEditedBook.data().author)
      settitle(myEditedBook.data().title)
     }catch(err){
        console.log(err.message)
     }
    }


    const handleSubmitData = async (e) =>{
        e.preventDefault();

        if(title === "" || author === ""){
          alert(' all fields are mendatory ')
          return
        }

        const newBook = {
         title,
         author , 
         status , 
        }
     
        if( editedBook !== undefined && editedBook !== ""){
          try {
            await BookDataSerices.updateBooks(editedBook,newBook)
            alert(' updated  succesfuly  ')
            setadded(true)    
            setEditedBook("")
            setstatus("")
            setauthor("")
            settitle("")
            setadded(false)

          }catch(error){
            setadded(false)
          }
        }
        else {
          try {
          const yourNewBook =   await BookDataSerices.addBooks(newBook)
            alert(' books added  succesfuly  ^^  ')
            setadded(true)         
            setstatus("")
            setauthor("")
            settitle("")
            setadded(false)

          }catch(error){
            setadded(false)
          }
        }
    }

    useEffect(() => {
      if(editedBook !== "" || editedBook !== undefined){
        displayEditedBooks(editedBook)
      }
    },[editedBook]);

    
  return (
    <div className='parent'>
      { added == true &&
        <AlertSucess/>
      }
    <div className="form">
    <Form onSubmit={handleSubmitData}>

    <Form.Group 
    style={styleForm} 
    className="mb-3" 
    controlId="formBasicEmail">

    <Form.Label style={{fontSize:'20px'}}> Title</Form.Label>
    <Form.Control onChange={(e)=> settitle(e.target.value)} value={title} type="text" placeholder=" This is the title " />
    </Form.Group>

    <Form.Group style={styleForm} className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{fontSize:'20px'}} > Author </Form.Label>
    <Form.Control  onChange={(e)=> setauthor(e.target.value)} value={author} type="text" placeholder=" this is the author " />
    </Form.Group>

    <div className="buttonGroup"  >
    <ButtonGroup  aria-label="Basic example">

    <Button
    className='buttonInGroup'
     onClick={(e)=> setstatus("available")} 
     variant="success">
        Available 
     </Button>

    <Button 
    className='buttonInGroup'
    onClick={(e)=> setstatus("Not available")}
    variant="danger">
       NotAvailable
     </Button>

    </ButtonGroup>
    </div>
    <div style={{position:'relative',top:'20px',width:'75%',margin:'0 auto'}} className="d-grid gap-2">
    <Button type='Submit' variant="primary" size="lg">
     add / update
    </Button>
    </div>
    </Form>
    </div>
    </div>
  )
}

export default AddBooks