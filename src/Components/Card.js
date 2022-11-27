import React from 'react'
// import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <>

   
            <div className='col-md-4 col-10 mx-auto'>
            <div className="card" >
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {props.title} </h5>
    <p className="card-text " >{props.description}</p>
    <a href={props.visit} target="_blank" rel="noreferrer" className="btn btn-primary">Click to know</a>
  </div>
</div>
            </div>
          
    </>
  )
}

export default Card
