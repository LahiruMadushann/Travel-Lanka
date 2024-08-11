"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import {
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import LogoImage from "./assets/Logo_Travel_Lanka.png";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-[15vh] w-full">
          <div className="flex items-center flex-shrink-0 ">
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

          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <a href="/" className="text-gray-500 hover:text-gray-800">
              Home
            </a>
            <a href="/about" className="text-gray-500 hover:text-gray-800">
              About
            </a>
            <a
              href="/destination"
              className="text-gray-500 hover:text-gray-800"
            >
              Destination
            </a>

            <div className="relative group">
              <a
                href="#"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                Pages{" "}
                <AiFillCaretDown className="ml-2 text-gray-500 group-hover:text-gray-800" />
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-48">
                <a
                  href="/page1"
                  className="block px-4 py-2 mt-6 text-gray-700 hover:bg-gray-200 whitespace-nowrap"
                >
                  Destination Details
                </a>
                <a
                  href="/page2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 whitespace-nowrap"
                >
                  Elements
                </a>
              </div>
            </div>

            <div className="relative group">
              <a
                href="#"
                className="flex items-center text-gray-500 hover:text-gray-800"
              >
                Blog{" "}
                <AiFillCaretDown className="ml-2 text-gray-500 group-hover:text-gray-800" />
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-48">
                <a
                  href="/blog"
                  className="block px-4 py-2 mt-6 text-gray-700 hover:bg-gray-200 whitespace-nowrap"
                >
                  Blog
                </a>
                <a
                  href="/single-blog"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200 whitespace-nowrap"
                >
                  Single Blog
                </a>
              </div>
            </div>

            <a href="/contact" className="text-gray-500 hover:text-gray-800">
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4 ">
              <IoMdCall className="ml-2 text-gray-500 group-hover:text-gray-800" />
              <p className="text-gray-500 hover:text-gray-800">076 525 9905</p>
            </div>

            <div className="flex space-x-2">
              <a href="/services" className="text-gray-500 hover:text-gray-800">
                <FaInstagram className="ml-2 text-gray-500 group-hover:text-gray-800" />
              </a>
              <a href="/contact" className="text-gray-500 hover:text-gray-800">
                <FaLinkedinIn className="ml-2 text-gray-500 group-hover:text-gray-800" />
              </a>
              <a href="/contact" className="text-gray-500 hover:text-gray-800">
                <FaFacebookF className="ml-2 text-gray-500 group-hover:text-gray-800" />
              </a>
              <a href="/contact" className="text-gray-500 hover:text-gray-800">
                <FaGooglePlusG className="ml-2 text-gray-500 group-hover:text-gray-800" />
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 ml-16 ">
            <a href="/login" className="text-gray-500 hover:text-gray-800">
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
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
            <a
              href="/"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="/destination"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Destination
            </a>
            <a
              href="/page1"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Page 1
            </a>
            <a
              href="/page2"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Page 2
            </a>
            <a
              href="/services"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Contact
            </a>
            <a
              href="/login"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Login
            </a>
            <a
              href="/signup"
              className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
