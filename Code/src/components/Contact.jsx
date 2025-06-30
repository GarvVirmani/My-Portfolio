import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const contacts = [
    { icon: <FaLinkedin size={28} />, url: 'https://linkedin.com/in/garv-virmani', name: 'LinkedIn' },
    { icon: <FaGithub size={28} />, url: 'https://github.com/GarvVirmani', name: 'GitHub' },
    { icon: <FaTwitter size={28} />, url: 'https://twitter.com/Garv__Virmani', name: 'Twitter' },
    { icon: <FaEnvelope size={28} />, url: 'https://mail.google.com/mail/?view=cm&to=garvirmani77@gmail.com', name: 'Email' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#1e2328] flex flex-col items-center justify-center px-6 relative"
    >
      <div className="absolute inset-0 z-0">
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

      <div className="absolute top-10 left-0 w-full h-20 overflow-hidden z-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-[#ff5c5c]"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        ></motion.div>
      </div>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-[#ff5c5c] z-10 cursor-pointer"
        whileHover={{ scale: 1.05, rotate: [0, -3, 0, 3, 0] }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-8 text-4xl text-gray-200 mb-12 z-10"
      >
        {contacts.map(({ icon, url, name }, i) => (
          <motion.div 
            key={i}
            variants={item}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[#2a2f35] hover:bg-[#ff5c5c] transition-all duration-300 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255, 92, 92, 0.5)"
              }}
            >
              <span className="text-white hover:text-[#1e2328] transition-colors duration-300">
                {icon}
              </span>
            </motion.a>
            <span className="mt-2 text-sm text-gray-400 hover:text-[#ff5c5c] transition-colors duration-300">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl text-gray-300 max-w-md text-center z-10"
      >
        Have a project in mind or want to discuss opportunities? Feel free to reach out!
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-8 text-xl z-10"
      >
        <motion.a
          href="https://mail.google.com/mail/?view=cm&to=garvirmani77@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff5c5c] hover:underline font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          garvirmani77@gmail.com
        </motion.a>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-12 h-12 border-2 border-[#ff5c5c] rounded-full flex items-center justify-center cursor-pointer">
          <div className="w-2 h-2 bg-[#ff5c5c] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact;