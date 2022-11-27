import React,{useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './Navbar.css'
import useBodyScrollLock from './useBodyScrollLock';
const Navbar = () => {
  const [toggle] = useBodyScrollLock();
  const [isMobile,setIsMobile] = useState(false)
  const History = useNavigate()
    const value = useSelector((state)=>state.cart)
    const {  logout,isAuthenticated,loginWithRedirect } = useAuth0();
    const redirect = ()=>{
     logout({ returnTo: window.location.origin })
    History('/login')
   }
  return (

    <div className='body'>

       <nav className={isMobile ? "navBar-mobile":"navBar"}>
        <ul className={isMobile ? "navlinks-mobile":"navlinks"} >
        <NavLink style={{textDecoration:"none",listStyle:"none",color:"black",marginBottom:"0.6rem"}} to='/'>

          <li id={isMobile ? "logo":"brand"}>SamStore</li>
        </NavLink>

          <li><NavLink to='/home' className='navlink' style={{fontWeight:"500"}} >Home</NavLink></li>
        
          <li><NavLink className='navlink' to='/About' style={{fontWeight:"500"}}>About</NavLink></li>
          <li><NavLink className='navlink' to='/Services' style={{fontWeight:"500"}}>Services</NavLink></li>
          <li><NavLink className='navlink' to='/Contact' style={{fontWeight:"500"}}>ContactUs</NavLink></li>
        </ul>
        <div className='navitem'>
        <div id={isMobile ? "cart":"shopCart"}>
        <NavLink to='/cart'>

        <Badge badgeContent={value.cartItems.length} color="primary">
          <ShoppingCartIcon  style={{fontSize:"2.5rem"}}/>
    </Badge>
        </NavLink>
        </div>
        <div className='out'>

            {
              isAuthenticated? (<button id='button' onClick={() => redirect() }>
      LogOut
    </button>):( <button id='button' onClick={() => loginWithRedirect()}>Log In</button>) }    
        </div>
        </div>
        
      </nav>
  <span id='menu-icon' style={{fontSize:"2rem"}}   onClick={()=>setIsMobile(!isMobile) }>{isMobile ? <i className='fas fa-times' onClick={toggle} ></i>: <i className='fas fa-bars' onClick={toggle} ></i>} </span>
    </div>
  )
}

export default Navbar
