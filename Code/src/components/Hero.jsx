import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ResumePDF from '../assets/Garv_Virmani_Resume.pdf';

function Hero() {
  const [name, setName] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showMouseIcon, setShowMouseIcon] = useState(true);
  const heroRef = useRef(null);

  const fullName = "Garv Virmani";

  useEffect(() => {
    if (index < fullName.length) {
      const timer = setTimeout(() => {
        setName(fullName.substring(0, index + 1));
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [index]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setShowMouseIcon(rect.bottom > 0 && rect.top < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-[#1e2328] px-4 overflow-hidden relative"
    >
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#ff5c5c] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="z-10 w-full flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
          >
            Hi, I'm <span className="text-[#ff5c5c]">{name}</span>
            <motion.span 
              animate={{ opacity: showCursor ? 1 : 0 }}
              className="inline-block ml-1 w-1 h-12 bg-[#ff5c5c]"
            ></motion.span>
          </motion.h2>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl mb-8 text-gray-200 max-w-md"
        >
          I build modern, responsive web applications.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 z-20"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            spy={true}
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ff5c5c" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-[#ff5c5c] text-white rounded-lg font-medium bg-transparent transition-colors duration-300"
            >
              About Me
            </motion.button>
          </Link>
          
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#ff5c5c" }}
            whileTap={{ scale: 0.95 }}
            href={ResumePDF}
            download="Garv_Virmani_Resume.pdf"
            className="px-6 py-3 border-2 border-[#ff5c5c] text-white rounded-lg font-medium bg-transparent hover:bg-[#ff5c5c] transition-colors duration-300 cursor-pointer"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
      
      {showMouseIcon && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link 
            to="about" 
            smooth={true} 
            duration={500}
            offset={-50}
            spy={true}
          >
            <div className="w-8 h-12 border-2 border-[#ff5c5c] rounded-full flex justify-center p-1 cursor-pointer">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 bg-[#ff5c5c] rounded-full"
              ></motion.div>
            </div>
          </Link>
        </motion.div>
      )}
    </section>
  )
}

export default Hero;