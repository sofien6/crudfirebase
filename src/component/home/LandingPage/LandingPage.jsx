import React from 'react'
import './css/design.css'
import video from './video/Dzbrain.mp4'
import { Button } from 'react-bootstrap'
const LandingPage = () => {
  return (
    <div className='landing_page'>
         <div className='landing_page_title'>
         <video width="750" height="500" autoPlay muted loop >
              <source src= {video} type="video/mp4"/>
          </video>
         </div>
         <div className='get_Started'>
         <Button size="lg" href='/Books' style={{backgroundColor:'#db3552',outline:'none',border:'none'}}>Get started</Button>
         </div>
    </div>
  )
}

export default LandingPage