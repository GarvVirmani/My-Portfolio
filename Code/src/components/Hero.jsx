import React from 'react'
import { Link } from 'react-scroll'
import ResumePDF from '../assets/Garv_Virmani_Resume.pdf';

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-[#1e2328] px-4"
    >
      <h2 className="text-5xl font-extrabold mb-4 animate-fadeIn text-white">
        Hi, I’m <span className="text-[#ff5c5c]">Garv Virmani</span>
      </h2>
      <p className="text-xl mb-6 animate-fadeIn text-gray-200">
        I build modern, responsive web applications.
      </p>
      <div className="flex space-x-4">
        <Link
          to="about"
          smooth
          duration={500}
          className="px-6 py-3 border border-[#ff5c5c] text-white rounded-lg font-medium hover:bg-[#ff5c5c] hover:text-white transition"
        >
          About Me
        </Link>
        <a
          href={ResumePDF}
          download
          className="px-6 py-3 border border-[#ff5c5c] rounded-lg text-white hover:bg-[#ff5c5c] transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Hero;