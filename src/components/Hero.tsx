"use client"

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';
import Image from 'next/image';


const Hero = () => {
 var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
 };

 const slideData = [
    {
        id: 0,
        image: "/banner-1.jpg",
        Title: "Address"
    },
 ];

    return (
        <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item) =><Slide 
                    key={item.id}
                    img={'item.img'}
                    title={'item.title'} mainTitle={''}/>
                )}
            </Slider>
        </div>
    </div>
    );
  }

export default Hero;