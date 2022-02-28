import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import { Navbar } from './Navbar';
import './NavbarItems.css'
import {  Link } from "react-router-dom";
import bakerslogo from '../asset/image/bakerslane.png'
export const NavbarItems = () => {
   

  return (
 
   
 <Menu  customBurgerIcon={<Navbar/>} right width={'410px'}  >
      <img src={bakerslogo} alt='bakerslane'/>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/menu">
        Menu
      </Link>
      <Link className="menu-item" to="/contact">
        Contact
      </Link>
    </Menu>
   
   
  )
  }
