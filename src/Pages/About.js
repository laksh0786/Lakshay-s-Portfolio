import React from "react";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import Particle from "../components/Particle";


function About() {
    return (

        <div name='about' className='w-full mt-10 bg-[#0a192f] text-gray-300'>

            <Particle />

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
                        <p className="text-justify">
                            I am currently pursuing my Bachelor's degree in Computer Science & Engineering from GZSCCET, MRSPTU Bti. I am actively exploring different web technologies and working on improving my skills by building projects and studying Data Structures and Algorithms. I have completed an internship as an IT intern at Trident Group India, where I received appreciation for my work. I am now seeking an internship opportunity in Web Development.
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <Skills />

            {/* Tools */}
            <Tools />

        </div>

    )
}

export default About;