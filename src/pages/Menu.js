import React from 'react'
import {NavbarItems } from '../components/NavbarItems'
import '../pages/Menu.css'
import {Card} from '../components/Card'
import "swiper/css";
import "swiper/css/pagination";
export const Menu = () => {
  return (
    <div  id='outer-container' className='Menu'>
         <NavbarItems pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
         <div id="page-wrap" >
     
      
      <div className='menu-title-container'>
      <h3 >MENU</h3>
      </div>
<Card />
   
</div>
      </div>
      
  )
}
