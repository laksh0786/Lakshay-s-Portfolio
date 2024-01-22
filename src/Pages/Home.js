import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import hero from '../assets/home-page.png'
import lakshay from '../assets/lakshay-ppic.png'
import Typewriter from "typewriter-effect";
import Introduction from '../components/Introduction';

function Home() {
  return (
    <div className="w-full h-screen mt-8 bg-[#0a192f] text-white ">
      {/* Container */}
      <div className='pt-28 sm:pt-32 flex justify-around lg:justify-center gap-6 lg:gap-14 mx-auto flex-wrap'>

        {/* Image Container
        <div>
          <img src={lakshay} alt="" className='w-[300px] sm:w-[300px] md:w-[350px] lg:w-[420px] rounded-full object-cover' />
        </div> */}

        {/* Text Container */}
        <div className='max-w-[1000px] lg:max-w-[1200px] pl-4 sm:pl-5 lg:pl-[66px] flex flex-col justify-center h-full'>

          <p className=' text-4xl my-2 text-pink-400 font-semibold'>
            <span>Hi , There!</span>
            <span className="wave ml-3 " role="img" aria-labelledby="wave">
              👋🏻
            </span>

          </p>

          <h1 className='text-4xl my-5 sm:text-5xl font-bold text-[#ccd6f6]'>I'M &nbsp;Lakshay Bansal</h1>

          <h2 className='text-3xl my-4 sm:text-[2.85rem] font-bold text-[#8892b0]'>
            <Typewriter className="inline" options={{
              strings: [
                "Student",
                "MERN Stack Developer",
                "Explorer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 80,
            }}
            />
          </h2>

          <p className='text-[#8892b0] py-4 my-3 max-w-[700px] sm:max-w-[600px] '>
            A dedicated web developer with a passion for turning ideas into functional and visually appealing websites. With a keen eye for detail and a commitment to clean, efficient code, I always try for creating seamless online experiences. My goal is to bridge the gap between design and technology, crafting websites that not only meet your needs but exceed your expectations. Let's collaborate to bring your digital vision to life and make your online presence stand out in the vast digital landscape.
          </p>

          <div>
            <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:rounded-lg font-medium transition-all duration-300'> View Work
              <span className='group-hover:rotate-180 duration-500'>
                <HiArrowNarrowRight className='ml-2 mr-2' />
              </span>
            </button>
          </div>

        </div>

        {/* Image Container */}
        <div>
          <img src={lakshay} alt="" className='w-[300px] sm:w-[300px] md:w-[350px] lg:w-[390px] rounded-full object-cover' />
        </div>

      </div>

      {/* Introduction */}
      <Introduction />

    </div>
  )
}

export default Home