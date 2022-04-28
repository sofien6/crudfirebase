import React , {useState,useEffect} from 'react'
import './booksList.css'
import {Table , Button} from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import BookDataSerices from '../services/books.services'
import { async } from '@firebase/util'
const BooksList = ({onEdit,setEditedBook}) => {

  const [allBooks, setallBooks] = useState([]);

  const getBooks = async ()=>{
      const  getAllBooks = await BookDataSerices.getAllBooks()
      console.log(getAllBooks.docs)
      setallBooks(getAllBooks.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
  
    const deleteBook = async (id) => {
     await BookDataSerices.deleteBook(id)
     alert(" book deleted")
     getBooks();
    }
   useEffect(() => {
     getBooks();
   },[]);
 
   


  return (
    <div className='booklistParent'>

      <Button variant='secondary' className='refresh' onClick={()=> getBooks()} > Refresh list </Button>

     { /* <pre>
       {JSON.stringify(allBooks,undefined,2)}
  </pre> */ }

        <Table className='myTab' striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Author</th>
      <th>Status</th>
      <th>Edit / Delete</th>
    </tr>
  </thead>
  <tbody>
    
      {
        
          allBooks.map((book , index  )=>(
            
          <tr key={index}>
            <td>{index}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.status}</td>
            <td>
            <Stack direction="horizontal" gap={3}>
               <Button onClick={(e)=> onEdit(book.id)} className='mb-2' variant="warning">Edit</Button>
             <div className="vr" />
               <Button className='mb-2' onClick={() => deleteBook(book.id) } variant="danger">delete</Button>
            </Stack>
            </td>
            </tr>
          ))
      }
    
  </tbody>
</Table>
    </div>
  )
}

export default BooksList