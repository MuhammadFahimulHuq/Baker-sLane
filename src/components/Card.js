import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import cake from '../asset/image/cake.jpg'
import cupcake from '../asset/image/cupcake.jpg'
import jarcake from '../asset/image/jarcake.jpg'
import poundcake from '../asset/image/pound cake.jpg'
import cookies from '../asset/image/cookies.jpg'
import pennacotta from '../asset/image/pennacotta.jpg'
import './Card.css'
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export const Card = () => {

  return (
    <div>

<Swiper         pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <SwiperSlide ><div className='card'>
        <div className='card-section'>
        <div className='menu-category'>
        <h3 >Cake</h3>
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
        <div className='menu-image'>
        <img src={cake} alt='cake' />
         </div>
        </div>
      
      </div></SwiperSlide>
  
      <SwiperSlide><div className='card'>
        <div className='card-section'>
        <div className='menu-category'>
        <h3 >Cupcakes</h3>
        <p>1. Chocolate</p>
        <p>2. Vanilla</p>
        <p>3. Double Chocolate (Dark / White )</p>
      
        <p className='alert'>*Send us any cupcake picture with any other required flavor.</p>
        </div>
        <div className='menu-image'>
        <img src={cupcake} alt='cupcake' />
        </div>
        </div>
      
      </div></SwiperSlide>
      <SwiperSlide><div className='card'>
        <div className='card-section'>
        <div className='menu-category'>
        <h3 >Jar Cakes</h3>
    
        <p className='alert'>*Any flavored cakes can be provided with required cream frosting.</p>
        </div>
        <div className='menu-image'>
        <img src={jarcake} alt='jarcake' />
        </div>
        </div>
      
      </div></SwiperSlide>
  
      <SwiperSlide><div className='card'>
        <div className='card-section'>
        <div className='menu-category'>
        <h3 >Pound Cake</h3>
        <p>1. Vanilla</p>
        <p>2. Chocolate</p>
        <p className='alert'>*Any other required flavor.</p>
        </div>
        <div className='menu-image'>
        <img src={poundcake} alt='poundcake' />
         </div>
        </div>
      
      </div></SwiperSlide>
      <SwiperSlide><div className='card'>
        <div className='card-section'>
        <div className='menu-category'>
        <h3>Biscuilts & Cookies</h3>
        <p>1. Vanilla</p>
        <p>2. Chocolate</p>
        <p>3. Double Chocolate</p>
        <p>4. Butter Biscuit</p>
        <p className='alert'>*Any other required flavor.</p>
        </div>
        <div className='menu-image'>
        <img src={cookies} alt='cookies' />
        </div>
        </div>
      
      </div></SwiperSlide>
      <SwiperSlide><div className='card'>
        <div className='card-section'>
        <div className='menu-category'>
            <h3 >Other Desserts</h3>
            <p>1. Pudding</p>
            <p>2. PannaCotta( vanilla / chocolate / strawberry / blueberry )</p>
            <p>3. Ice cream Flavour</p>
            <p className='alert'>*Any other required flavor.</p>
        </div>
        <div className='menu-image'>
        <img src={pennacotta} alt='pennacotta' />
        </div>
       
         
        </div>
      
      </div></SwiperSlide>
    </Swiper>
  </div>
  )
}
