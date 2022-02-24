import React from 'react'
import { Navbar } from '../components/Navbar'
import '../pages/Menu.css'
import cake from '../asset/image/cake.jpg'
export const Menu = () => {
  return (
    <div className='Menu' id='outer-container'>
      <div className='frame-container'>
        <div></div>
      <Navbar />
      </div>
      <div className='menu-title-container'>
      <span className='menu-line'></span><h3>MENU</h3>
      </div>
      <div className='card'>
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
      </div>
  )
}
