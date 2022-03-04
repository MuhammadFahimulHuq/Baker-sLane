import React from 'react';
import facebook from '../asset/image/icons8-facebook-50.png'
import instagram from '../asset/image/icons8-instagram-50.png'
import mail from '../asset/image/icons8-mail-50.png'
import phone from '../asset/image/icons8-phone-50.png'
import '../components/ContactNav.css'

export const ContactNav = () => {
  return <div className='icon-container'>
    <a href='facebook.com' className='icon'><img src={facebook} alt="facebook"/></a>
    <a href='facebook.com' className='icon'> <img src={instagram} alt='instagram'/></a>
    <a href='facebook.com' className='icon'><img src={mail} alt='mail' /></a>
    <a href='facebook.com' className='icon'><img src={phone} alt='phone' /></a>
  </div>;
};
