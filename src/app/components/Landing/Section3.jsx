import React from 'react';
import Image from "next/image";
import img1 from '@/app/assets/img2.png'

const Section3 = () => {
    return (<>
        <div className='bg-[#f7f0e6] px-20 py-10 liner-section3 lg:flex items-center justify-center gap-20'>
            {/* left */}
            <div className='lg:w-5/12 w-12/12 space-y-9 !order-1'>
                <p className=" !leading-[54px]  text-5xl font-medium text-gray-700">
                    Professional and qualified therapists who you can trust
                </p>
                <p className='leading-8 text-2xl text-gray-600 mt-7'>
                    Tap into the world's largest network of qualified
                    and experienced therapists who can help you with a
                    range of issues including depression, anxiety, relationships,
                    trauma, grief, and more. With our therapists, you get the same
                    professionalism and quality you would expect from an in-office therapist,
                    but with the ability to communicate when and how you want.

                </p>
                <button
                    className={`py-3 text-xl px-8 rounded-full text-green-700 bg-[#a6de9b] hover:text-white hover:bg-green-700
                    `}
                >
                    Get matched to a Therapist
                </button>
            </div>
            {/* right */}
            <div className='lg:w-5/12 w-12/12 !order-2'>
                <Image src={img1} alt="star" className='w-full'/>
            </div>
        </div>
    </>);
};

export default Section3;