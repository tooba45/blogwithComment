import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





const Footer = () => {
  return (
    
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-blue-800 text-xl">Tooba-Blog</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 blog website
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500 hover:text-blue-500 text-xl"><FaFacebookF /></a>
      <a className="ml-3 text-gray-500  hover:text-blue-500 text-xl"><FaTwitter /></a>
      <a className="ml-3 text-gray-500  hover:text-pink-500 text-2xl"><FaInstagram />      </a>
      
    </span>
  </div>
</footer>

   
  )
}

export default Footer
