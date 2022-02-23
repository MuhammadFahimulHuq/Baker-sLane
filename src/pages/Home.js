import React from 'react'
import bakerslogo from '../asset/image/bakerslane.png'
import beeimage from '../asset/image/bee.png'
import '../pages/Home.css'
import frame1 from '../asset/image/Frame1.png'
import frame2 from '../asset/image/Frame2png.png'
import { ContactNav } from '../components/ContactNav'
import { Navbar } from '../components/Navbar'
export const Home = () => {
  return (
    <div className='home'>

      <div className='frame-container'>
      <img src={frame1} alt='frame1' classname='frame1'/>
      <Navbar />
      </div>
      <div className='logo-container'>
      <img src={bakerslogo} alt='bakerslane' className='bakerslanelogo'/>
      </div>
     <div className='order-container'>
     <button className='order-button'>ORDER NOW</button>
     </div>
    <div className='paragraph-container'>
    <p>
        "Baker's Lane" is an online based Bakery. We always grasp the quality by choosing the best ingredients & definitely maintain hygiene which makes you feel like home. Feel free to contact with us anytime along with your any query.
        </p>
        <h3>Waiting for your buzz.<img src={beeimage} alt='bee' className='bee'/></h3>
    </div>
      
      <ContactNav/>
      <div className='line-container'>
      <div className='line-one'></div>
        <div className='line-two'></div>
      </div>
     
    </div>
  )
}