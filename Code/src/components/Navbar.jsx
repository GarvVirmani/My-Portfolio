import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'experience', label: 'Experience' },
    { to: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#1e2328]/90 backdrop-blur-sm z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-[#f1f8ff]">My<span className="text-[#ff5c5c]">Portfolio</span></h1>
        <div className="md:hidden text-2xl text-[#f1f8ff] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`
          absolute top-full left-0 w-full bg-[#1e2328]/95 transition-all duration-300 ease-in
          ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}
          md:static md:w-auto md:bg-transparent md:flex md:items-center md:space-x-6 md:max-h-screen md:overflow-visible
        `}>
          {links.map(({ to, label }) => (
            <li key={to} className="border-b border-[#2a2f35] md:border-none">
              <Link
                to={to}
                smooth
                duration={500}
                offset={-64}
                className="block px-6 py-4 md:py-0 text-[#f1f8ff] hover:text-[#ff5c5c] cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;