import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: 'DSA Team Member',
      company: 'Microsoft Student Chapter - MSIT',
      duration: 'Oct 2023 - Present',
      description: 'Engaged in solving daily DSA problems and actively participated in society-organized DSA bootcamps and coding competitions.',
    },
    {
      title: 'Contributor',
      company: 'Social Winter Of Code',
      duration: 'Jan 2024 - Feb 2024',
      description: 'Contributed to open-source during SWOC by fixing bugs and enhancing UI. Successfully submitted and merged 4 pull requests. Developed and deployed two mini projects: Home Renovation Budget Calculator and Cricket Calculator using HTML, CSS, and JavaScript.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { x: -50, opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20 
      }
    }
  };

  return (
    <section id="experience" className="min-h-screen bg-[#1e2328] px-6 py-12 flex flex-col items-center">
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
        Experience
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl w-full space-y-10"
      >
        {experiences.map(({ title, company, duration, description }, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 30px rgba(255, 92, 92, 0.2)"
            }}
            className="bg-[#2a2f35] p-6 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#ff5c5c]"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="md:w-4/5">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-xl text-[#ff5c5c] mb-3">{company}</p>
                <p className="text-gray-300">{description}</p>
              </div>
              
              <motion.p 
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium text-[#ff5c5c] bg-[#ff5c5c]/10 px-3 py-1 rounded-full md:w-1/5 md:text-right mt-4 md:mt-0 self-start"
              >
                {duration}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience;