import React from 'react';
import { motion } from 'framer-motion';
import p1 from '../assets/P1.png';
import p2 from '../assets/P2.png';
import p3 from '../assets/P3.png';
import p4 from '../assets/P4.png';

function Projects() {
  const projects = [
    {
      title: 'MediCure Store',
      desc: 'MediCure Store is a full-stack E-commerce platform for buying medicines online. It offers user authentication, role-based access for buyers and sellers, product management, and a responsive UI. The app ensures a smooth shopping experience with a secure checkout flow, making it easy for users to manage and purchase healthcare products.',
      tech: 'JavaScript, Bootstrap, Node.js, Express, MongoDB, EJS',
      codeLink: 'https://github.com/GarvVirmani/MediCure-Store',
      demoLink: 'https://medicure-store.onrender.com/',
      image: p1,
    },
    {
      title: 'HomeInventory',
      desc: 'HomeInventory is a responsive MERN stack web app to manage your household items with ease. It includes user authentication, protected routes, item tracking, dark/light mode toggle, and smooth state management using Redux Toolkit. The UI is powered by TailwindCSS and ShadCN UI for a modern experience.',
      tech: 'React, Redux Toolkit, Tailwind CSS, ShadCN UI, Node.js, Express, MongoDB, JWT',
      codeLink: 'https://github.com/GarvVirmani/Home-Inventory',
      demoLink: 'https://home-inventory-9zqa.onrender.com/',
      image: p2,
    },
    {
      title: 'JobPortal',
      desc: 'JobPortal is a modern full-stack web application designed to connect job seekers and employers. Users can search, filter, and view job listings, while employers can post new opportunities. The app supports authentication, responsive design, and intelligent live filtering to simplify the job hunt or hiring process.',
      tech: 'React, Tailwind CSS, Redux Toolkit, Framer Motion, Node.js, Express, MongoDB, JWT',
      codeLink: 'https://github.com/GarvVirmani/Job-Portal',
      demoLink: 'https://job-portal-jvnw.onrender.com/',
      image: p3,
    },
    {
      title: 'AI Summarizer',
      desc: 'AI Summarizer is a sleek React web app that uses Google\'s Gemini 2.0 Flash API to generate concise summaries of lengthy text. With a clean UI and real-time loading indicators, users can instantly get readable summaries in 150–200 words, making content consumption faster and smarter.',
      tech: 'React, Fetch API, Google Gemini API, GitHub Pages',
      codeLink: 'https://github.com/GarvVirmani/AI-Summarizer',
      demoLink: 'https://garvvirmani.github.io/AI-Summarizer/',
      image: p4,
    }
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
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-[#1e2328] px-6 py-12">
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#ff5c5c]"
        whileHover={{ scale: 1.05, rotate: [0, -3, 0, 3, 0] }}
        whileTap={{ scale: 0.95 }}
      >
        Projects
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto space-y-16"
      >
        {projects.map(({ title, desc, tech, codeLink, demoLink, image }, index) => (
          <motion.div
            key={title}
            variants={item}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="bg-[#2a2f35] rounded-2xl shadow-lg overflow-hidden relative group"
          >
            <div className="relative overflow-hidden bg-black flex justify-center">
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                src={image}
                alt={title}
                className="h-72 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a2f35] to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">
                {title}
              </h3>
            </div>
            
            <div className="p-6">
              <p className="mb-4 text-gray-300">{desc}</p>
              <p className="text-sm text-gray-400 mb-6">
                <span className="font-bold text-[#ff5c5c]">Tech Stack:</span> {tech}
              </p>
              
              <div className="flex justify-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: "#e54b4b" }}
                  whileTap={{ scale: 0.95 }}
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-[#ff5c5c] text-white rounded-lg font-medium transition-colors"
                >
                  View Code
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: "#e54b4b" }}
                  whileTap={{ scale: 0.95 }}
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-[#ff5c5c] text-white rounded-lg font-medium transition-colors"
                >
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects;