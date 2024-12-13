import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaPhoneVolume } from 'react-icons/fa6';
import '@/app/styles/Contact.css'; 

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='contact-heading' data-aos="fade-down">Get in touch</h2>
          <p className='contact-description' data-aos="fade-down">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className='contact-item' data-aos="fade-down">
            <CiMail size={30} /> shaniiisiddiqui94@gmail.com
          </div>
          <div className='contact-item' data-aos="fade-down">
            <FaPhoneVolume size={20} /> (021)00000000
          </div>
        </div>
        <div className='space-y-8'>
          <div className='input-field' data-aos="fade-down">
            <label className='form-label' htmlFor="name">Name</label>
            <input type="text" className='input-field' id='name' />
          </div>
          <div className='input-field' data-aos="fade-down">
            <label className='form-label' htmlFor="email">Email</label>
            <input type="email" className='input-field' id='email' />
          </div>
          <div className='input-field' data-aos="fade-down">
            <label className='form-label' htmlFor="msg">Message</label>
            <textarea className='textarea-field' id='msg' rows={8}></textarea>
          </div>
          <button className='send-button' data-aos="fade-down">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
