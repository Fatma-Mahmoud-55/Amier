import React from 'react';
import curve from "@/app/assets/curve-section2.svg";
import Image from "next/image";

const Hero = () => {
    return (<>
        <div className='  pt-20  bg-[#325343]'>
            <div className='h-[20vh]'></div>
            <div className='w-6/12 mx-auto'>
                <h1 className='text-5xl  text-center text-white mx-auto px-32 '> Dr. Emir
                    Demirel</h1>
                <h3 className='text-2xl leading-8 text-center text-white mx-auto  mt-7'>Expert Psychiatrist & Psychotherapist
                    Certified Medical Expert in Swiss Insurance Medicine (SIM)</h3>
            </div>

        </div>
        <div className='curve-bg w-full pt-10'>
            <Image src={curve} alt="star" className=' w-full '/>

        </div>

    </>);


};

export default Hero;