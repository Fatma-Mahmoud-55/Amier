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
                             What types of evaluations do you provide?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 0 && (
                        <div className="p-4">
                            <p>
                                We specialize in:

                                Corporate health assessments for employee work capacity.
                                Legal evaluations for civil law cases, such as capacity or consent issues.
                                Public law assessments, including insurance claims and disability cases.
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
                             How long does it take to receive the assessment report?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 1 && (
                        <div className="p-4">
                            <p>
                                We deliver most reports within 2 weeks from the date of assignment, ensuring both thoroughness and efficiency.

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
                            Are your evaluations legally recognized?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 2 && (
                        <div className="p-4">
                            <p>
                                Yes, our evaluations are conducted by certified medical
                                experts in compliance with Swiss Insurance Medicine (SIM) standards and legal frameworks.
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
                             Do you provide follow-up support after delivering the report?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 3 && (
                        <div className="p-4">
                            <p>Absolutely. We offer follow-up consultations to address any questions or additional needs related to the assessment.
                            </p>
                        </div>
                    )}
                </div>


                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(4)}
                        >
                             Can you handle urgent requests?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 4 && (
                        <div className="p-4">
                            <p>Yes, we prioritize urgent cases and aim to provide prompt evaluations without compromising quality.</p>
                        </div>
                    )}
                </div>

                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(5)}
                        >
                             What regions do you serve?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 5 && (
                        <div className="p-4">
                            <p>
                                We primarily serve Switzerland, focusing on Central Swiss cantons (Schwyz, Lucerne, Zug, Obwalden, Nidwalden), but we are also available for consultations in other regions.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(6)}
                        >
                            How do I get started?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 6 && (
                        <div className="p-4">
                            <p>
                                Getting started is simple! Contact us via the form on our website or email us directly with your inquiry. Our team will guide you through the next steps.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border rounded   ">
                    <div className="border-b">
                        <h2
                            className="px-10 cursor-pointer p-4 text-lg  flex justify-between items-center hover:bg-gray-100"
                            onClick={() => toggleAccordion(7)}
                        >
                             Are consultations confidential?
                            <HiPlus/>
                        </h2>
                    </div>
                    {activeIndex === 7 && (
                        <div className="p-4">
                            <p>
                                Yes, all consultations and evaluations are conducted with the highest level of confidentiality and professionalism.
                            </p>
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