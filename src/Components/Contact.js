import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import "./Contact.css"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_glapr85', 'template_oz9x71a', form.current, '1w7fPJN52jxFGYv0y')
      .then((result) => {
          console.log(result.text);
           alert('Message sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <Navbar/>
      <div className='component'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact-div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
          <form ref={form} onSubmit={sendEmail}>
          <div className='mb-3 '>

      <label className='form-label'>Name</label>
      <input className='form-control' type="text" name="user_name" required/> <br/> 
      <label className='form-label'>Phone</label>
      <input className='form-control' type="number" name="number" required/> <br />
      <label className='form-label'>Email</label>
      <input className='form-control' type="email" name="user_email"  required/> <br />
      <label className='form-label'>Message</label>
      <textarea rows="3" className='form-control' name="message" required /> <br />
          </div>
      <input className='btn btn-primary' type="submit" value="Send" />
    </form>
   
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
