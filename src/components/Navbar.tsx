import Link from 'next/link';
import React from 'react';
import {AiOutlineCloudDownload} from "react-icons/ai";

const navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
        <header className="text-gray-600 body-font bg-fixed bg-cover bg-center
        custom-image">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">Portfolio</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-blue-600" href={'#Home'}>
        Home
      </Link>
      <Link className="mr-5 hover:text-blue-600" href={'#About'}> 
        About
      </Link>
      <Link href={'#Skills'} className="mr-5 hover:text-blue-600"> 
        Skills
      </Link>
    </nav>
    <a href="./assets/Syeda_Resume_205.pdf">
    <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 
    focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Download Resume
    <AiOutlineCloudDownload className="text-xl ml-2" />
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default navbar