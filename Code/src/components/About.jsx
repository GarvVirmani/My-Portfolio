import React from 'react';
import { motion } from 'framer-motion';

function About() {
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#1e2328] px-6 text-center font-sans relative"
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

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl z-10"
      >
        <motion.h2 
          variants={item}
          className="text-4xl md:text-5xl font-semibold mb-8 tracking-wide text-[#ff5c5c] cursor-pointer"
          whileHover={{ scale: 1.05, rotate: [0, -3, 0, 3, 0] }}
          whileTap={{ scale: 0.95 }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          variants={item}
          className="text-lg leading-relaxed text-[#f1f8ff] mb-4"
        >
          I'm a web developer with expertise in the MERN stack, passionate about building modern, responsive, and user-friendly web applications. I focus on writing clean, efficient code to deliver seamless digital experiences.
        </motion.p>
        
        <motion.p 
          variants={item}
          className="text-lg leading-relaxed text-[#f1f8ff]"
        >
          Always eager to learn and grow, I thrive in collaborative environments, contributing to impactful projects and innovative solutions.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

export default About;