import React , {useState , useRef} from 'react'
import './css/design.css'
import { Row,Col,Form,Button } from 'react-bootstrap'
import QRCode  from 'qrcode'
import QrReader from 'qr-reader-react';

const QrCode = () => { 
    const [text, settextl] = useState("")
    const [password, setpassword] = useState("")
    const qrReader = useRef(null);
    const [imageUrl, setimageUrl] = useState("")
    const [scanFile, setscanFile] = useState("")

    const generateCode = async (e) => {
        e.preventDefault(); 
        const content = text+":"+password
        try{
          const response = await QRCode.toDataURL(content)
          setimageUrl(response)
        }catch(error){
            alert(" unknows error")
        }
    }

    const fileScan = (result) => {
        if(result){
            setscanFile(result)
        }
    }

    const handleErorr = (error) => {
         alert('hummm' + error)
    }

    const chooseImage = () => {
        qrReader.current.openImageDialog()
    }
  return (
    <div className='qrcode_parent'>
      
      <Row>
          <Col>
               <div className='qrcode_title'>
                   <p> Qr code generator & scanner with Dzbrain </p>
               </div>
          </Col>
      </Row>
       <Row>

        <div className='qr_field'>
            <Form onSubmit={generateCode}>
             <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{color:"white"}} value={text} >Email address</Form.Label>
              <Form.Control onChange={(e)=>settextl(e.target.value)}  type="text" placeholder="Enter Text" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label style={{color:"white"}}  value={password}>Password</Form.Label>
               <Form.Control onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
             </Form.Group>
              <Button  variant="primary" type="submit">
                 Generate
              </Button>
             </Form>
        </div>
           
              <div className='qrcode_result_image'>
                <p> Your result : </p>
                <br/>
                <div className="image_decoration_result">
                <img src={imageUrl} />
                </div>
                 <div className="result_button_download">
                 <a href={imageUrl} download ><Button> Download  </Button></a>
                 </div>
              </div>


           <div className='qrcode_scan_image'>
                <p> scan your image here : </p>
                 <div className="d-grid gap-2">
                <Button  onClick={chooseImage} variant="primary" size="lg">
                  Scan Now
                </Button>
                </div>
                <br/>

                <div className="scanedImage">
                <QrReader
                  ref = {qrReader}
                  delay = {300}
                  onScan = {fileScan}
                  onError = {handleErorr}
                  legacyMode
                 />
                 <p> result of scanned file : </p> 
                </div>
                <p className='theResultOfSCAN'>  {scanFile} </p>

              </div>
       </Row>
    </div>
  )
}

export default QrCode