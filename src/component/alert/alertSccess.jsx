import React , {useState} from 'react'
import { Alert } from 'react-bootstrap'
const AlertSucess = () => {
    const [show, setShow] = useState(true);
  return (
    <div>
        { show === true &&
            <Alert variant="success"  onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Congratulation !</Alert.Heading>
         <p>
           The book is  added successfuly 
         </p>
         </Alert>
        }
         
    </div>
  )
}

export default AlertSucess