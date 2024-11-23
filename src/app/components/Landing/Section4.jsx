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
                        Initial Consultation                    </p>
                    <p className='leading-8 text-2xl text-gray-600 mt-7'>
                        We begin by understanding your unique needs—whether it's a corporate health evaluation, legal consultation, or public law inquiry.
                        What you do: Submit a request or schedule a consultation.
                        What we do: Analyze your case and provide tailored guidance.
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
                            Information Collection
                        </p>
                        <p className='leading-8 text-2xl text-gray-600 mt-7'>
                            Our team gathers all relevant medical, legal, or organizational information to ensure a thorough and accurate assessment.
                            What you do: Provide necessary documents and background details.
                            What we do: Conduct in-depth research and prepare for evaluation.
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
                            Expert Evaluation
                        </p>
                        <p className='leading-8 text-2xl text-gray-600 mt-7'>
                            Our certified professionals conduct detailed evaluations based on your case requirements.
                            <strong>
                            For example:

                            </strong>
                            Employee work capacity reviews for corporate health.
                            Legal capacity and consent assessments for civil law.
                            Medical and psychiatric evaluations for insurance claims.

                        </p>

                    </div>

                </div>

            </div>

            {/* four */}
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
                            Report Delivery
                        </p>
                        <p className='leading-8 text-2xl text-gray-600 mt-7'>
                            Receive a comprehensive report with actionable insights and professional recommendations.
                           <strong> What you get:</strong>Accurate, well-documented findings.
                            Clear guidance for informed decision-making.

                        </p>

                    </div>

                </div>

            </div>
   {/* five */}
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
                           Ongoing Support
                        </p>
                        <p className='leading-8 text-2xl text-gray-600 mt-7'>
                            Our commitment doesn&apos;t end with the report. We offer follow-up consultations to address any questions or additional needs.
                            <strong>What you do : </strong>Reach out for further support if required.
                            What we do: Provide continued expertise and updates.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    </>);
};

export default Section4;