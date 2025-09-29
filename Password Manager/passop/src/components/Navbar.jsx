import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-4">
        {/* Brand */}
        <div className="text-xl md:text-2xl font-bold tracking-wide">
          My Password Manager
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap gap-4 md:gap-10 text-base md:text-lg mt-3 md:mt-0">
          <li>
            <a href="#" className="hover:underline underline-offset-4">Home</a>
          </li>
          <li>
            <a href="#" className="hover:underline underline-offset-4">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline underline-offset-4">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
