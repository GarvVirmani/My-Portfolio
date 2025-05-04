import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

function Contact() {
  const contacts = [
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/garv-virmani' },
    { icon: <FaGithub />, url: 'https://github.com/GarvVirmani' },
    { icon: <FaTwitter />, url: 'https://twitter.com/Garv__Virmani' },
    { icon: <FaEnvelope />, url: 'https://mail.google.com/mail/?view=cm&to=garvirmani77@gmail.com' },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#1e2328] flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-4xl font-bold mb-6 text-[#ff5c5c] animate-fadeIn">
        Contact Me
      </h2>
      <div className="flex space-x-8 text-3xl text-gray-200 animate-fadeIn">
        {contacts.map(({ icon, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff5c5c] transition"
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="mt-6 text-gray-400 text-lg animate-fadeIn">
        Email: <a
  href="https://mail.google.com/mail/?view=cm&to=garvirmani77@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#ff5c5c] hover:underline"
>
  garvirmani77@gmail.com
</a>

      </p>
    </section>
  )
}

export default Contact;