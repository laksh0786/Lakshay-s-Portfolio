import React from "react";
import Skills from "../components/Skills";
import Tools from "../components/Tools";


function About() {
    return (

        <div name='about' className='w-full mt-10 h-screen bg-[#0a192f] text-gray-300'>

            {/* Introduction */}
            <div className='pt-24 flex flex-col items-center w-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 pl-6 md:pl-48'>
                    <div className='sm:text-right pb-8 mb-8 '>
                        <p className=' text-[33px] sm:text-4xl font-bold inline border-b-4 border-pink-600'>
                            Know Who I'M
                        </p>
                    </div>

                </div>
                <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Hi. I'm Lakshay Bansal, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className="text-[18px]">
                        <p>I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software
                            for clients ranging from individuals and small-businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips?</p>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <Skills />

            {/* Tools */}
            <Tools/>

        </div>

    )
}

export default About;