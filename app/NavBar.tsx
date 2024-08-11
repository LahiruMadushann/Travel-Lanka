'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import LogoImage from './assets/Logo_Travel_Lanka.png';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[15vh] w-full">
          <div className="flex-shrink-0 flex items-center ">
            <a href="/" className="flex items-center">
              <Image
                src={LogoImage}
                alt="Travel Lanka Logo"
                className="object-contain w-28"
                quality={100}
                priority
              />
              <p className="ml-3 text-[#343a40] font-bold text-lg">
                Travel Lanka
              </p>
            </a>
          </div>
          <div className="hidden md:flex flex-grow justify-center space-x-8 ">
            <a href="/" className="text-gray-500 hover:text-gray-800">Home</a>
            <a href="/about" className="text-gray-500 hover:text-gray-800">About</a>
            <a href="/services" className="text-gray-500 hover:text-gray-800">Services</a>
            <a href="/contact" className="text-gray-500 hover:text-gray-800">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4 ">
            <a href="/login" className="text-gray-500 hover:text-gray-800">Login</a>
            <a href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Sign Up
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Home</a>
            <a href="/about" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">About</a>
            <a href="/services" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Services</a>
            <a href="/contact" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Contact</a>
            <a href="/login" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Login</a>
            <a href="/signup" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
