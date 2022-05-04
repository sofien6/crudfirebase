import React , {useState} from 'react'
import './css/design.css'
import {Form , Button} from 'react-bootstrap'
import { async } from '@firebase/util'
import {createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import LoginDataServices from '../../services/login.services'
import { auth } from '../../firebase-config'
const Login = () => {

  const [emails, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [chekmeout, setchekmeout] = useState("")
  const [user, setuser] = useState({});

  onAuthStateChanged(auth, (currentUser) => setuser(currentUser))

  const creatUser = async (e) => {
      e.preventDefault(); 
      const myUser = {
        emails,
        password,
      }
      console.log(myUser)

      try{
        const users = await createUserWithEmailAndPassword(
          auth,emails,password
        )
        alert(' user added  succesfuly  ^^  ')
        setemail("")
        setpassword("")
      }catch(error){
        alert(' this email is taken ^^ ')
      }
  }

  return (
    <div className='login_parent'>
      <Form onSubmit={creatUser}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"white"}} >Email address</Form.Label>
    <Form.Control onChange={(e)=>setemail(e.target.value)} value={emails}  type="email" placeholder="Enter email" />
    <Form.Text style={{color:"white"}} className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"white"}}>Password</Form.Label>
    <Form.Control  onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group style={{color:"white"}} className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={(e)=>setchekmeout(e.target.value)} value={chekmeout} type="checkbox" label="Check me out" />
  </Form.Group>
    <Button  variant="primary" type="submit">
      Submit
    </Button>
    </Form>

    <div className="currentUser">
    </div>
    </div>
  )
}

export default Login