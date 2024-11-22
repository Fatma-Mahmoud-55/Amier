"use client"
import React from 'react';
import { useState } from 'react';
import { HiPlus } from "react-icons/hi2";
const Section11 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (<>
        <div className='p-12 py-20 mt-2'>
            <h2 className='text-5xl w-full text-center mb-7'>Frequently asked questions
            </h2>

            <div className="lg:w-9/12 w-12/12 p-4 mx-auto">
                <div className="border rounded ">
                    <div className="border-b ">
                        <h2
                            className=" px-10 cursor-pointer p-4 text-lg flex justify-between items-center  hover:bg-gray-100"
                            onClick={() => toggleAccordion(0)}
                        >
                            Who are the therapists? <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 0 && (
                        <div className="p-4">
                            <p>
                                Every therapist providing services on BetterHelp is a credentialed and experienced
                                counselor, psychologist, social worker, or therapist.

                                They must also have a relevant academic degree, at least 3 years of experience, and have
                                credentials from their professional organization. This includes completing the necessary
                                education, exams, training, and practice requirements. We refer to therapists across our
                                sites and apps according to their professional title and credentials, specific to the
                                U.S., U.K., Australia, Germany, France, or the Netherlands, as applicable.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(1)}
                        >
                            Who will be helping me? <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 1 && (
                        <div className="p-4">
                            <p>
                                After you sign up, we will match you to an available therapist who fits your objectives,
                                preferences, and the type of issues you are dealing with. Different therapists have
                                different approaches and areas of focus, so it's important to find the right person who
                                can achieve the best results for you. We have found that we are able to provide a
                                successful match most of the time; however, if you start the process and you feel your
                                therapist isn't a good fit for you, you may elect to be matched to a different
                                therapist.

                            </p>
                        </div>
                    )}
                </div>

                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(2)}
                        >
                            Is BetterHelp right for me? <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 2 && (
                        <div className="p-4">
                            <p>
                                After you sign up, we will match you to an available therapist who fits your objectives,
                                preferences, and the type of issues you are dealing with. Different therapists have
                                different approaches and areas of focus, so it's important to find the right person who
                                can achieve the best results for you. We have found that we are able to provide a
                                successful match most of the time; however, if you start the process and you feel your
                                therapist isn't a good fit for you, you may elect to be matched to a different
                                therapist.
                            </p>
                        </div>
                    )}
                </div>


                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(3)}
                        >
                            How much does it cost? <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 3 && (
                        <div className="p-4">
                            <p>This is the content of Panel 3.</p>
                        </div>
                    )}
                </div>


                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(4)}
                        >
                            I signed up. How long until I'm matched with a therapist? <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 4 && (
                        <div className="p-4">
                            <p>Every therapist providing services on BetterHelp is a credentialed and experienced
                                counselor, psychologist, social worker, or therapist.

                                They must also have a relevant academic degree, at least 3 years of experience, and have
                                credentials from their professional organization. This includes completing the necessary
                                education, exams, training, and practice requirements. We refer to therapists across our
                                sites and apps according to their professional title and credentials, specific to the
                                U.S., U.K., Australia, Germany, France, or the Netherlands, as applicable.</p>
                        </div>
                    )}
                </div>

                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(5)}
                        >
                            How will I communicate with my therapist?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 5 && (
                        <div className="p-4">
                            <p>This is the content of Panel 3.</p>
                        </div>
                    )}
                </div>
            </div>


            <div className='flex flex-col gap-7 justify-center items-center mt-6'>
                <p className='text-[#325343] underline text-xl cursor-pointer hover:text-green-500'> More frequently asked questions</p>
                <button
                    className={`py-3 text-xl px-8 rounded-full text-green-700 bg-[#a6de9b] hover:text-white hover:bg-green-700
                    `}
                >
                    Get Started
                </button>
            </div>

        </div>
    </>);
};

export default Section11;