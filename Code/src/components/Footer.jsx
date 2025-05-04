import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#1e2328] text-[#f1f8ff] text-center py-4">
      <p>© {new Date().getFullYear()} My<span className="text-[#ff5c5c]">Portfolio</span> All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;