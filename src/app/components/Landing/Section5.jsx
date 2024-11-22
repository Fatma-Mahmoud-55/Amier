import React from 'react';
import Image from "next/image";
import girl from "@/app/assets/girl1.png";
import curve from "@/app/assets/curve-section4.svg";


const Section5 = () => {
    return (<>
        <div className='pt-10 '>
            <div className='curve2-bg'>
            <Image src={curve} alt="star" className=' w-full mt-9'/>

            </div>
            <div className='bg-[#325343]'>
            <Image src={girl} alt="star" className=' w-full '/>

            </div>

        </div>
</>);
};

export default Section5;