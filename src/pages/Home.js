import React from 'react'
import bakerslogo from '../asset/image/bakerslane.png'
import '../pages/Home.css'
import frame1 from '../asset/image/Frame2png.png'
import { ContactNav } from '../components/ContactNav'
import { NavbarItems } from '../components/NavbarItems'
import video from '../asset/image/video.mp4'
import videoSnapShot from '../asset/image/video_snapshot.jpg'
export const Home = () => {
  return (
    <div  id='outer-container' className='home'>
      <video poster={videoSnapShot} autoPlay loop muted id='video'>
        <source src={video} type='video/mp4'/>
      </video>
     <NavbarItems pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
    <div id="page-wrap">
<div className='frame-container'>
      <img src={frame1} alt='frame1' classname='frame1'/>
     
      </div>
      <div className='logo-container'>
      <img src={bakerslogo} alt='bakerslane' className='bakerslanelogo'/>
      </div>
     <div className='order-container'>
     <a  class="order-button" role="button" href='https://www.facebook.com/Bakerslane01'>ORDER NOW</a>
     </div>
    <div className='paragraph-container'>
    <p>
        "Baker's Lane" is an online based Bakery. We always grasp the quality by choosing the best ingredients & definitely maintain hygiene which makes you feel like home. Feel free to contact with us anytime along with your any query.
        </p>
        <h3>waiting for your buzz.</h3>
    </div>
      
      <ContactNav/>
      <div className='line-container'>
      <div className='line-one'></div>
        <div className='line-two'></div>
      </div>
     
</div>
  
    </div>
  )
}
