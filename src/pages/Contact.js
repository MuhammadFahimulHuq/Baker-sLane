import React,{useRef} from 'react'
import { ContactNav } from '../components/ContactNav'
import emailjs from '@emailjs/browser';
import '../pages/Contact.css'
import { NavbarItems } from '../components/NavbarItems'


export const Contact = () => {
  const form = useRef();
  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_wmm47i4','oFx4egvemgUQsm5MW')
  }
  return (
    <div className='contact' id='outer-container'>
    <NavbarItems pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
    <div id="page-wrap">
         <div className='frame-container'>
     
      </div >
      <div className='contact-title-container'>
    <h3>Contact Us
      </h3>
      </div>
    
      <div className='contact-nav-container'>
      <ContactNav />
        <h3>Connect with us on social media</h3>
        <div className='line'> </div>
      </div>
      {/* form */}
              <div className='form-bg'>

                <span className='inner-form'>
                <input className='first-name' placeholder='First Name'/>
          <input  placeholder='Last Name'/>
                </span>
                <span className='inner-form'>
          <input placeholder='Email'/>
          <input placeholder='Phone No'/>
          </span>
          <textarea type="text" id='message' placeholder='Message...'/>
          <button>SEND</button>
            
              </div>
{/* 
            form */}
    <div className='message-container'>
    <h3>Leave Us A Message</h3>
    <div className='line'> </div>
    </div>
  {/* <div className='review-container'>
   <img src={review1} alt="review"/>

  </div> */}
 <div className='review-text'>
 <h3 >We appreciate your love.</h3>
 </div>
 </div>
        </div>
  )
}
