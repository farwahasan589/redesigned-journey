import React from 'react'
import Image from "next/image";
import user from "./public/user.jpg"

const Testimonial = () => {
  return (
    <div>
        <div className="container pt-16 pb-16 grid-cols-2"></div>
        <h2 className="font medium-text-2xl pb-4">Website Maker</h2>
        <div className="grid lg:grid -cols-[300px,1fr] gap-4">
            <div className="text-center flex flex-col items-center gap-1">
                <Image 
                className="rounded full inline-block"
                src={"/user.jpg"}
                alt="user"
                width={100}
                height={100}
                 />
                 <h2 className="text-gray-500 font-black text-[20px]">S.Farwa Hasan</h2>
                 <p>CEO and Founder</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial;