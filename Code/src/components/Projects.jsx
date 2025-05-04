import React from 'react'
import p1 from '../assets/P1.png'
import p2 from '../assets/P2.png'
import p3 from '../assets/P3.png'
import p4 from '../assets/P4.png'

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
  ]

  return (
    <section id="projects" className="min-h-screen bg-[#1e2328] px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn text-[#ff5c5c]">
        Projects
      </h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {projects.map(({ title, desc, tech, codeLink, demoLink, image }) => (
          <div
            key={title}
            className="bg-[#2a2f35] rounded-2xl shadow-lg overflow-hidden animate-fadeIn"
          >
            <div className="w-full">
              <img
                src={image}
                alt={title}
                className="w-full object-contain bg-black"
              />
              <h3 className="text-2xl font-semibold my-4 text-center text-white">
                {title}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="mb-2 text-gray-200">{desc}</p>
              <p className="text-sm text-gray-400 mb-6 text-center">
                <strong>Tech Stack:</strong> {tech}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#ff5c5c] text-white rounded-lg hover:bg-[#e54b4b] transition"
                >
                  Code
                </a>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#ff5c5c] text-white rounded-lg hover:bg-[#e54b4b] transition"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;