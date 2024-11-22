import React from 'react';
import curve from "@/app/assets/curve-section2.svg";
import Image from "next/image";

const Hero = () => {
    return (<>
        <div className=' pt-20  bg-[#325343]'>
            <div className='h-[20vh]'></div>
          <h1 className='text-5xl text-center text-white mx-auto '>You deserve to be happy.</h1>
            <h3 className='text-2xl text-center text-white mx-auto  mt-7'>What type of therapy are you looking for?</h3>
        </div>
        <div className='curve-bg w-full pt-10'>
        <Image src={curve} alt="star" className=' w-full '/>

        </div>

</>);
};

export default Hero;