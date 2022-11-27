import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import "./About.css"
const About = () => {
  return (
    <>
    <Navbar/>
      <section id='header' className='d-flex align-item-center '>
         <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                <div className='row'>

                    <div id='items' className='col-md-6 pt-5 mt-8 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h1 > <span style={{textTransform:"capitalize"}}>Trust is our strength </span><br /> <span className='brand-name'>you will get here almost everything</span></h1>
                        <p className='my-2 mx-1'>
                            we check and verify the product before <br/> shipping it,
                            for more details <a target='_blank' href='https://www.samstores.com/'>visit here</a> 
                        </p>
                        <div className='mt-3'>
                          <NavLink to= '/Contact' className='btn btn-primary'> Contact Now </NavLink>
                        </div>
                    </div>
                    <div  className='col-lg-6 order-1 order-lg-2 mt-8 header-img'>
                        <img id='img'  src='https://res.cloudinary.com/dgs31aaon/image/upload/v1668408122/page_rqzdmq.jpg' className='img-fluid animated' alt='img'/>
                    </div>
                </div>
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default About
