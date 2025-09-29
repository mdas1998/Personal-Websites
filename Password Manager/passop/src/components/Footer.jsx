import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 text-white mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Section */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} My Password Manager. All rights reserved.
        </p>

        {/* Middle Section - Links */}
        <div className="flex gap-6 text-sm md:text-base">
          <a href="#" className="hover:underline underline-offset-4">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Terms of Service
          </a>
        </div>

        {/* Right Section - Socials */}
        <div className="flex gap-4">
          <a href="#" aria-label="GitHub" className="hover:text-gray-200">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-200">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-200">
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
