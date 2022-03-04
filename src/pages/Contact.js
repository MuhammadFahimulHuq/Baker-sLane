import React,{useRef, useState} from 'react'
import { ContactNav } from '../components/ContactNav'
import emailjs from '@emailjs/browser';
import '../pages/Contact.css'
import { NavbarItems } from '../components/NavbarItems'
import { ConfirmMessage } from '../components/ConfirmMessage';



export const Contact = () => {
  const[confirmMessage,setConfirmMessage] = useState(false)
  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_40wf0re','template_w0oyqr8',form.current,'oFx4egvemgUQsm5MW')
    .then(res =>{
      console.log(res);
      setConfirmMessage(true);
    }).catch(err=>console.log(err))
  }
  return (
    <div className='contact' id='outer-container'>
    <NavbarItems pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
    <div id="page-wrap">
   <div className='frame-container'>

   </div>
      <div className='menu-title-container'>
        <h3>Contact Us
          </h3>
      </div>
    
      <div className='contact-nav-container'>
      <ContactNav />
        <h3>Connect with us on social media</h3>
        <div className='line'> </div>
      </div>
      {/* form */}
    
      {confirmMessage?(<div className='form-bg'><ConfirmMessage/></div>):(
 <form ref={form} onSubmit={sendEmail}>

<div className='form-bg'>
   <span className='inner-form'>
   <input name="first_name" className='first-name' placeholder='First Name'/>
<input name="last_name"  placeholder='Last Name'/>
   </span>
   <span className='inner-form'>
<input name="email" placeholder='Email'/>
<input name="phone_no" type="number" placeholder='Phone No'/>
</span>
<textarea id='message' type="text"  name="message" placeholder='Message...'/>
<button type='submit' >Send</button> 

</div>
 </form>

      )}
    
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
