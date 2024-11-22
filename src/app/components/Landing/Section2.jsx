import React from 'react';
import Image from "next/image";
import curve from "@/app/assets/curve-section2.svg";
const Section2 = () => {
    return (<>
        <div className="bg-[#fffcf6]  ">

            {/*<Image src={curve} alt="star" className='absolute -top-5 w-full'/>*/}

            {/* Content Section */}
            <div className=" flex justify-center gap-20 items-center animate__animated animate__fadeInDown z-10 py-16 px-6 mx-auto">
                {/* Headline */}
                <div className="text-start w-4/12 px-5  mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl leading-8 tracking-tight  text-gray-700">
                        The world&apos;s largest therapy service.
                    </h1>
                    <p className="text-green-600 text-3xl sm:text-4xl lg:text-5xl  mt-3">
                        100% online.
                    </p>
                </div>

                {/* Stats */}
                <div className=" px-10 w-5/12 ">
                    {/* First Stat */}
                    <div className='w-full border-b  border-b-gray-400'>
                        <p className="text-green-700 text-4xl font-bold">406,421,779</p>
                        <p className="text-gray-600 text-lg w-full whitespace-nowrap py-4">
                            Messages, chat, phone, video sessions
                        </p>
                    </div>
                    {/* Second Stat */}
                    <div className='w-full border-b mt-7 border-b-gray-400'>
                        <p className="text-green-700 text-4xl font-bold">32,946

                        </p>
                        <p className="text-gray-600 text-lg w-full whitespace-nowrap py-4">
                            Qualified therapists ready to help

                        </p>
                    </div>
                    {/* Third Stat */}
                    <div className='w-full mt-7'>
                        <p className="text-green-700 text-4xl font-bold">5,421,98</p>
                        <p className="text-gray-600 text-lg w-full whitespace-nowrap py-4">
                            People got help
                        </p>
                    </div>

                </div>



            </div>
        </div>
    </>);
};

export default Section2;