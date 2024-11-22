import React from 'react';
import Image from "next/image";
import img3 from "@/app/assets/img33.png";
import img4 from "@/app/assets/img44.png";
import img5 from "@/app/assets/img55.png";
import { FaArrowDownLong } from "react-icons/fa6";

const Section4 = () => {
    return (<>
        <div className='bg-[#fffcf6] px-20 py-10 mt-10  '>
            <p className="text-xl sm:text-2xl lg:text-5xl leading-8 tracking-tight text-center    text-gray-700">
                How it works
            </p>
            {/* one */}
            <div className='lg:flex items-center justify-center gap-24 mt-6'>
                {/* left */}
                <div className='w-5/12'>
                    <Image src={img3} alt="star" className='w-full'/>
                </div>
                {/* right */}
                <div  className='lg:w-3/12 w-12/12 space-y-9  '>
                    <p className=" !leading-10  text-3xl font-medium text-gray-700">
                        Get matched to the best therapist for you
                    </p>
                    <p className='leading-8 text-2xl text-gray-600 mt-7'>
                        Answer a few questions to find a
                        qualified therapist who fits your needs
                        and preferences. Tap into the largest
                        online network of credentialed providers.
                    </p>

                </div>
            </div>
            {/* two */}
            <div>
                <div className='flex justify-center items-center mt-8'>
                    <FaArrowDownLong className='text-6xl text-green-700 '/>
                </div>
                <div className='lg:flex items-center justify-center gap-24'>
                    {/* left */}
                    <div className='w-5/12'>
                        <Image src={img4} alt="star" className='w-full'/>
                    </div>
                    {/* right */}
                    <div className='lg:w-3/12 w-12/12 space-y-9 '>
                        <p className=" !leading-10  text-3xl font-medium text-gray-700">
                            Communicate your way
                        </p>
                        <p className='leading-8 text-2xl text-gray-600 mt-7'>
                            Talk to your therapist however you feel comfortable — text, chat, phone, or video.
                        </p>

                    </div>

                </div>

            </div>

            {/* three */}
            <div>
                <div className='flex justify-center items-center mt-8'>
                    <FaArrowDownLong className='text-6xl text-green-700 '/>
                </div>
                <div className='lg:flex items-center justify-center gap-24'>
                    {/* left */}
                    <div className='w-5/12'>
                        <Image src={img5} alt="star" className='w-full'/>
                    </div>
                    {/* right */}
                    <div className='lg:w-3/12 w-12/12 space-y-9 '>
                        <p className=" !leading-10  text-3xl font-medium text-gray-700">
                            Therapy when you need it
                        </p>
                        <p className='leading-8 text-2xl text-gray-600 mt-7'>
                            You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.

                        </p>

                    </div>

                </div>

            </div>

        </div>
    </>);
};

export default Section4;