import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'experience', label: 'Experience' },
    { to: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 15 }}
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-[#1e2328] py-2 shadow-lg' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-[#f1f8ff]"
          whileHover={{ scale: 1.05, rotate: [0, -3, 0, 3, 0] }}
          whileTap={{ scale: 0.95 }}
        >
          My<span className="text-[#ff5c5c]">Portfolio</span>
        </motion.h1>
        
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-[#f1f8ff] cursor-pointer z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
        
        <motion.ul 
          variants={container}
          initial="hidden"
          animate="show"
          className={`
            absolute top-full left-0 w-full bg-[#1e2328] transition-all duration-300 ease-in
            ${isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}
            md:static md:w-auto md:bg-transparent md:flex md:items-center md:space-x-6 md:max-h-screen md:overflow-visible
          `}
        >
          {links.map(({ to, label }) => (
            <motion.li key={to} variants={item} className="border-b border-[#2a2f35] md:border-none">
              <Link
                to={to}
                smooth
                duration={500}
                offset={-64}
                className="block px-6 py-4 md:py-2 text-[#f1f8ff] hover:text-[#ff5c5c] cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  )
}

export default Navbar;