import React , {useState} from 'react'
import './css/design.css'
import {Form , Button} from 'react-bootstrap'
import { async } from '@firebase/util'
import LoginDataServices from '../../services/login.services'
const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [chekmeout, setchekmeout] = useState("")

  const creatUser = async (e) => {
      e.preventDefault(); 
      const myUser = {
        email,
        password,
        chekmeout
      }

      try{
        const user = await LoginDataServices.addusers(myUser)
        alert(' user added  succesfuly  ^^  ')
        setemail("")
        setpassword("")
      }catch(error){
        alert(' Error   ^^  ')
      }
  }

  return (
    <div className='login_parent'>
      <Form onSubmit={creatUser}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"white"}} onChange={(e)=>setemail(e.target.value)} value={email} >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text style={{color:"white"}} className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"white"}} onChange={(e)=>setpassword(e.target.value)} value={password}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group style={{color:"white"}} className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={(e)=>setchekmeout(e.target.value)} value={chekmeout} type="checkbox" label="Check me out" />
  </Form.Group>
    <Button  variant="primary" type="submit">
      Submit
    </Button>
    </Form>
    </div>
  )
}

export default Login