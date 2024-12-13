import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '@/app/styles/Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-container relative flex h-16 items-center justify-between px-4'>
      <div className='text-xl font-bold text-orange-400'>Shanyal</div>
      <div className='hidden md:flex space-x-10'>
        <a href='#hero' className='nav-link'>Home</a>
        <a href='#about' className='nav-link'>About</a>
        <a href='#projects' className='nav-link'>Projects</a>
        <a href='#skills' className='nav-link'>Skills</a>
        <a href='#contact' className='nav-link'>Contact</a>
      </div>
      <div className='menu-icon md:hidden flex items-center' onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {isMenuOpen && (
        <div className='absolute top-16 left-0 w-full navbar-container flex flex-col items-center md:hidden'>
          <a href="#hero" className='nav-link py-2' onClick={toggleMenu}>Home</a>
          <a href="#about" className='nav-link py-2' onClick={toggleMenu}>About</a>
          <a href="#projects" className='nav-link py-2' onClick={toggleMenu}>Projects</a>
          <a href="#skills" className='nav-link py-2' onClick={toggleMenu}>Skills</a>
          <a href="#contact" className='nav-link py-2' onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
