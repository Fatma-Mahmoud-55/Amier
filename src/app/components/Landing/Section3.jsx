import React from 'react';
import Image from "next/image";
import img1 from '@/app/assets/aaa.jpg'

const Section3 = () => {
    return (<>
        <div className='bg-[#f7f0e6] px-20 py-10 liner-section3 lg:flex items-center justify-center gap-32'>
            {/* left */}
            <div className='lg:w-5/12 w-12/12 space-y-9 !order-1'>
                <p className=" !leading-[54px]  text-5xl font-medium text-gray-700">
                    Professional and qualified therapist who you can trust
                </p>
                <p className='leading-8 text-2xl text-gray-600 mt-7'>
                    With decades of experience in Psychiatry, Psychotherapy,
                    and Clinical Research, we specialize in delivering comprehensive
                    assessments for medical
                    and legal challenges. Our services are rooted in precision,
                    independence, and trust.

                </p>
                <button
                    className={`py-3 text-xl px-8 rounded-full text-green-700 bg-[#a6de9b] hover:text-white hover:bg-green-700
                    `}
                >
                    Get matched to Dr. Emir Demirel
                </button>
            </div>
            {/* right */}
            <div className='lg:w-5/12 w-12/12 !order-2 py-10 '>
                <Image src={img1} alt="star" width={400} height={300} className=''/>
            </div>
        </div>
    </>);
};

export default Section3;