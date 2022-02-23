import React from 'react'
import { ContactNav } from '../components/ContactNav'
import { Navbar } from '../components/Navbar'
import '../pages/Contact.css'
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
<input placeholder='First Name'/>
<input placeholder='Last Name'/>
<input placeholder='Email'/>
<input placeholder='Phone No'/>
<input type="text" placeholder='Message'/>
<button>send</button>
    </div>
     
        
        
        </div>
  )
}
