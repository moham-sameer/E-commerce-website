import React,{useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './Landing.css'
const Landing = () => {
  const History = useNavigate()
    const value = useSelector((state)=>state.cart)
    const {  logout,isAuthenticated,loginWithRedirect } = useAuth0();
    const redirect = ()=>{
     logout({ returnTo: window.location.origin })
    History('/login')
   }
   const [isMobile,setIsMobile] = useState(false)
  return (
    <div className='landing'>

    <div className='navContent'>
       <nav className={isMobile? "navBar-mobile":"navBar"}>
        <ul className={isMobile? "navlinks-mobile":"navlinks"}>
        <NavLink style={{textDecoration:"none",listStyle:"none",color:"gray",marginBottom:"0.6rem"}} to='/'>

          <li id={isMobile ? "logo":"brand"}> SamStore </li>
        </NavLink>

          <li><NavLink to='/home' className="nav-link" style={{fontWeight:500}}  >Home</NavLink></li>
        
          <li><NavLink className="nav-link" to='/About' style={{fontWeight:500}}  >About</NavLink></li>
          <li><NavLink to='/Services' className="nav-link" style={{fontWeight:500}}  >Services</NavLink></li>
          <li><NavLink to='/Contact' className="nav-link" style={{fontWeight:500}}  >ContactUs</NavLink></li>
        </ul>
        <div className='container'>
        <div className='links'>

        <NavLink to='/cart'>

        <Badge badgeContent={value.cartItems.length} color="primary">
          <ShoppingCartIcon id={isMobile? "cart":"shopCart"} style={{fontSize:"2.5rem",color:"black"}}/>
    </Badge>
        </NavLink>
        </div>
        <div id="auth" className={isMobile?"logout":"signout"}>

            {
              isAuthenticated? (<button id='btn' onClick={() => redirect() }>
      LogOut
    </button>):( <button id='btn' onClick={() => loginWithRedirect()}>Log In</button>) }    
        </div>
        </div>
      </nav>
      <span id='menu-icon' style={{fontSize:"2rem"}} onClick={()=>setIsMobile(!isMobile)} >{isMobile ? <i className='fas fa-times'  ></i>: <i className='fas fa-bars' ></i>} </span>

    </div>
    <section id='home'>

    <div  data-aos="fade-up" className='files'>
        <h2>online</h2>
        <h1>shopping</h1>
        <p>welcome to my store we are here to fulfill all<br/> your clothing and electronic needs we will be glad <br/> to help you and guaranteed you a amazing quality and service</p>
        <NavLink to='/home'><button>Shop now <i className='fas fa-shopping-cart'></i></button></NavLink>
        <div className='icons'>
        <a href='https://www.facebook.com' target='_blank' className='fab fa-facebook-f'></a>
        <a href='' className='fab fa-twitter'></a>
        <a href='' className='fab fa-instagram'></a>
        <a href='' className='fab fa-github'></a>

        </div>
        

    </div>
    <div  data-aos="fade-down" className={isMobile? "logoImage":"image"}>
    <img  src="https://res.cloudinary.com/dgs31aaon/image/upload/v1668232933/new%20files/Add_to_Cart-amico_1_xihjj3.svg" alt='' />
    </div>
    </section>
    <div>
    </div>
    </div>

  )
}

export default Landing
