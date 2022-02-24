import React from 'react'
import { ContactNav } from '../components/ContactNav'
import { Navbar } from '../components/Navbar'
import '../pages/Contact.css'
import review1 from '../asset/image/review-1.png'
export const Contact = () => {
  return (
    <div className='contact'>

         <div className='frame-container'>
        <div>

        </div>
        <Navbar/>
      </div >
     
      <h3>Contact Us
      <div className='line'> </div>
      </h3>
      <div className='contact-nav-container'>
      <ContactNav />
        <h3>Connect with us on social media</h3>
        <div className='line'> </div>
      </div>
    <div className='form-bg'>
<input className='first-name' placeholder='First Name'/>
<input placeholder='Last Name'/>
<input placeholder='Email'/>
<input placeholder='Phone No'/>
<input type="text" placeholder='Message'/>
<button>SEND</button>
  
    </div>
    <div className='message-container'>
    <h3>Leave Us A Message</h3>
    <div className='line'> </div>
    </div>
  <div className='review-container'>
   <img src={review1}/>

  </div>
 <div className='review-text'>
 <h3 >We appreciate your love.</h3>
 </div>
        </div>
  )
}
