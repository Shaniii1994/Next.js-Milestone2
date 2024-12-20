import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaPhoneVolume } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl'>Get in touch</h2>
          <p className='text-orange-500 text-[18px] pt-2'>
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className='flex gap-3 items-center text-orange-500'>
            <CiMail size={30} /> shaniiisiddiqui94@gmail.com
          </div>
          <div className='flex gap-3 items-center text-orange-500'>
            <FaPhoneVolume size={30} /> (021) 000-0000
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1 text-red-600'>
            <label htmlFor='name'>Name</label>
            <input type='text' 
            className='h-[40px] bg-transparent border border-yellow-300' 
            id='name'/>
          </div>
          <div className='flex flex-col gap-1 text-red-600'>
            <label htmlFor='email'>Email</label>
            <input type='text' 
            className='h-[40px] bg-transparent border border-yellow-300' 
            id='email'/>
          </div>
          <div className='flex flex-col gap-1 text-red-600'>
            <label htmlFor='msg'>Message</label>
            <textarea 
            className='bg-transparent border border-yellow-300' 
            id='msg' rows={8}>
              </textarea>
          </div>
          <button className='bg-orange-500 p-2 px-6 text-red-600'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
