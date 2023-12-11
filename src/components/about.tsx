import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div id="About">
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto">
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
      Hey there! I am Syeda Farwa Hasan,a full stack developer driven by a fusion of technology and design.I completed my 12th-grade from Sir Syed Govt Girls College. I furthered my expertise through courses  into Metaverse, Web 3.0, and AI at Piaic.

As a full stack developer, I specialize in blending front-end creativity with back-end functionality. Crafting seamless user interfaces and architecting robust server-side systems form the core of my expertise. Beyond coding and design, I am passionate about exploring creative expressions that fuel my perpetual quest for growth.

I thrive on the evolving landscape of technology, seeking to leverage its potential to create impactful solutions. Whether it is developing innovative applications or pushing the boundaries of user experience, I am dedicated to embracing the challenges that come my way.

Let connect and explore opportunities to collaborate, innovate, or discuss the ever-evolving world of technology and design. Reach out at syedafarwa58@gmail.com for inquiries, collaborations, or engaging conversations on our field exciting developments!
      </p>
      <div className="flex justify-center">
        <Link href="./assets/Syeda_Resume_205.pdf">
<button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View Resume
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About