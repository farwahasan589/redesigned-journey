"use client"

import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
const Hero = () => {
  return (
  <section className="text-gray-600 body-font bg-blue-200">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          I am
          <br className="hidden lg:inline-block" />
          <Typewriter
  options={{
    strings: ["Web Developer",
"Programmer"
"UI/UX Developer"],
    autoStart: true,
    loop: true,
  }}
/>
        </h1> 
        <div className="w-{100px] h-[2px] bg-blue-700"></div>
        <p className="mb-8 leading-relaxed">
        Welcome to my digital domain I am Syeda Farwa Hasan a passionate aspiring FullStack 
        Developer and design aficionado driven by a fervent desire to create seamless innovative web experiences With a sturdy foundation in JavaScript and TypeScript coupled with expertise in Nextjs and Tailwind CSS 
        I sculpt dynamic and responsive applications.
        My canvas extends beyond codeI wield Adobe Photoshop and Illustrator to breathe life into creative visions ensuring usercentric interfaces through UIUX principles Armed with a grasp of color psychology and branding strategies I infuse digital identities with unique character Embracing the power of Python and PostgreSQL navigate data intricacies while seamlessly managing content with Sanityio As a fresher my hunger for learning and dedication to pushing the boundaries of web development propel me to seek collaborative ventures that drive innovation in this everevolving landscape Lets connect and craft something extraordinary together.
        </p>
        <div className="flex justify-center">
          <Link href={"#Contact"}>
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Contact
    </button>
    </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image 
          className="object-cover object-center rounded"
          src={require("../../public/assets/users.jpg")}
          alt="users"
          width={"400"}
          height={"400"}
          />
      </div>
    </div>
  </section>
  )
}

export default Hero