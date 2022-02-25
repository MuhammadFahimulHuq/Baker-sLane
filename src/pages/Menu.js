import React from 'react'
import {NavbarItems } from '../components/NavbarItems'
import '../pages/Menu.css'
import cake from '../asset/image/cake.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Menu = () => {
  return (
    <div  id='outer-container' className='Menu'>
         <NavbarItems pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
         <div id="page-wrap">
      <div className='frame-container'>
        <div></div>
     
      </div>
      <div className='menu-title-container'>
      <span className='menu-line'></span><h3>MENU</h3>
      </div>
 <Carousel>


        <div className='card '>
        <div className='card-section'>
        <div className='menu-category'>
        <h3 style={{color:'white'}}>Cake</h3>
        <p>1. Chocolate</p>
        <p>2. Vanilla</p>
        <p>3. Black Forest</p>
        <p>4. Red Velvet</p>
        <p>5. Orange</p>
        <p>6. Mango</p>
        <p>7. Lemon</p>
        <p>8. Coffee</p>
        <p>9. Cheese Cake</p>
        <p className='alert'>*Send us any cake picture with any other required flavor.</p>
        </div>
        <img src={cake} alt='cake' className='card-img'/>
         
        </div>
      
      </div>
      <div className='card '>
        <div className='card-section'>
        <div className='menu-category'>
        <h3 style={{color:'white'}}>Cake</h3>
        <p>1. Chocolate</p>
        <p>2. Vanilla</p>
        <p>3. Black Forest</p>
        <p>4. Red Velvet</p>
        <p>5. Orange</p>
        <p>6. Mango</p>
        <p>7. Lemon</p>
        <p>8. Coffee</p>
        <p>9. Cheese Cake</p>
        <p className='alert'>*Send us any cake picture with any other required flavor.</p>
        </div>
        <img src={cake} alt='cake' className='card-img'/>
         
        </div>
      
      </div>
      </Carousel>
   
      </div>
      </div>
  )
}
