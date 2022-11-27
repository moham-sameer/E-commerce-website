import React from 'react'
import "./Login.css"
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
     const  {loginWithRedirect} = useAuth0()
  return (
    <div className='login'>
      <div className='title'>
        <h1>Welcome to SamStore</h1>
        <p>A place for all your clothing and electronic needs</p>

      </div>
    </div>
  )
}

export default Login
