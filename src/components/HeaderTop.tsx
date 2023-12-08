import React from 'react'

import { BsFacebook, BsInstagram, BsTwitter,BsLinkedin } from "react-icons/bs"
const HeaderTop = () => {
  return <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <BsFacebook/>
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsInstagram/>
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsTwitter/>
                    </div>
                    <div className="header_top__icon_wrapper">
                            <BsLinkedin/>
                    </div>
                    </div>


<div className="text-gray-500 text-[12px]"></div>
 <b>PROPRIETOR: ASLAM RAZA</b>                    
                </div>
            </div>
  </div>
};

export default HeaderTop;