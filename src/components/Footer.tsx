import Link from 'next/link';
import React from 'react'
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-blue-50">
 
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl">Portfolio</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 Syeda Farwa Hasan 
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link 
        target="_blank"
                              className="text-gray-500" href={'https://www.facebook.com/farwa.hasan.2013'}>
            <BsFacebook className="text-3xl hover:text-[#f00000]" />
            </Link>
      </span>
    </div>
  </footer>
    </div>
  )
}

export default Footer;