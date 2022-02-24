import React,{useState} from 'react'
import { slide as Menu } from 'react-burger-menu';
import { Navbar } from './Navbar';
import './NavbarItems.css'
export const NavbarItems = () => {
   

  return (

     <Menu customBurgerIcon={<Navbar/>} right width={'410px'}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Menu
      </a>
      <a className="menu-item" href="/pizzas">
        Contact
      </a>
    </Menu>
   
  )
  }
