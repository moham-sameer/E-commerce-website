import React,{useEffect} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom'

const Protected = ({Cmp}) => {
    const {isAuthenticated} = useAuth0()
   const history = useNavigate();
   useEffect(()=>{
    if(!isAuthenticated){
      history('/')
      alert("Please Login/Signup first")
    }
   })
  return (
    <div>
     <Cmp/>
    </div>
  )
}

export default Protected
