import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt-10 py-10 mb-10 bg-yellow-500'>
      <div className='flex justify-between items-center'>
      <div className='text-xl font-bold text-orange-500'>Shanyal</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex font-bold text-orange-500'>
          <li className='menuLink'><a href='#hero'>Home</a></li>
          <li className='menuLink'><a href='#about'>About</a></li>
          <li className='menuLink'><a href='#projects'>Projects</a></li>
          <li className='menuLink'><a href='#skills'>Skills</a></li>
          <li className='menuLink'><a href='#contact'>Contact</a></li>
        </ul>
        <AiOutlineMenu className='md:hidden' size={30} />
        </div>
    </div>
  );
};

export default Navbar;
