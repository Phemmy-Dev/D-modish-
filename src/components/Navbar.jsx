import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the homepage
  const isHomepage = location.pathname === '/';

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine if navbar should have white background
  const hasWhiteBackground = !isHomepage || scrolled;

  const navLinkStyles = ({ isActive }) => 
    `px-4 py-2 text-sm font-medium transition-all duration-300 rounded hover:bg-white/10 ${
      hasWhiteBackground 
        ? isActive 
          ? 'text-[#E1BF5E] font-bold' 
          : 'text-[#1F1D63]'
        : isActive 
          ? 'text-[#E1BF5E] font-bold' 
          : 'text-white'
    }`;
  
  const mobileLinkStyles = ({ isActive }) => 
    `block px-6 py-3 text-base transition-all duration-300 hover:bg-gray-50 ${
      isActive ? 'text-[#E1BF5E] font-bold bg-[#E1BF5E]/5' : 'text-gray-700'
    }`;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
      hasWhiteBackground ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="w-full px-8 md:px-16 lg:px-20 xl:px-24 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="inline-flex items-center bg-white px-4 py- rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(0,0,0,0.15)] hover:-translate-y-0.5">
            <img src={logo} alt="D'modish Cakes Logo" className="h-20 w-auto" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkStyles}>
              About Us
            </NavLink>
            <NavLink to="/menu" className={navLinkStyles}>
              Menu
            </NavLink>
            <NavLink to="/gallery" className={navLinkStyles}>
              Gallery
            </NavLink>
            <NavLink to="/hygiene" className={navLinkStyles}>
              Hygiene
            </NavLink>
            <NavLink 
              to="/order" 
              className="ml-4 px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#E1BF5E] to-[#d4a838] rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(225,191,94,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(225,191,94,0.5)]"
            >
              Order Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className={`w-8 h-8 ${hasWhiteBackground ? 'text-[#1F1D63]' : 'text-white'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className={`w-8 h-8 ${hasWhiteBackground ? 'text-[#1F1D63]' : 'text-white'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white mx-4 md:mx-8 rounded-b-[20px] shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <ul className="py-4">
          <li>
            <NavLink to="/" className={mobileLinkStyles} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={mobileLinkStyles} onClick={() => setIsOpen(false)}>
              Who We Are
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={mobileLinkStyles} onClick={() => setIsOpen(false)}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={mobileLinkStyles} onClick={() => setIsOpen(false)}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/hygiene" className={mobileLinkStyles} onClick={() => setIsOpen(false)}>
              Hygiene
            </NavLink>
          </li>
          <li className="px-4 py-3 mt-2">
            <NavLink
              to="/order"
              className="block text-center py-3 text-base font-bold text-white bg-gradient-to-r from-[#E1BF5E] to-[#d4a838] rounded-full shadow-[0_4px_15px_rgba(225,191,94,0.3)] hover:shadow-[0_6px_20px_rgba(225,191,94,0.4)]"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
