import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";


function Footer() {
  return (
    <div>

      <div className='mt-16 w-full flex flex-col gap-3 text-gray-200 items-center relative bottom-0'>

        <p className='text-4xl tracking-wider font-semibold'>FIND ME ON</p>
        <p className='text-sm font-medium tracking-tight'>Feel free to <span className='text-[#72c1b0]'>connect</span> with me</p>

      </div>

      <div className='w-full mt-10 flex justify-center flex-wrap gap-14'>
        <a className='footer-link border ' href="https://github.com/laksh0786" target='_blank' rel="noreferrer"> <AiFillGithub className='text-[#329d86] p-2' size={45} />     </a>
        <a className='footer-link' href="https://www.linkedin.com/in/lakshay-bansal-044717224/" target='_blank' rel="noreferrer"> <FaLinkedinIn className='text-[#329d86] p-2' size={45} />     </a>
        <a className='footer-link' href="https://www.instagram.com/lakshay1973/" target='_blank' rel="noreferrer"> <AiFillInstagram className='text-[#329d86] p-2' size={45} />  </a>
        <a className='footer-link' href="https://auth.geeksforgeeks.org/user/lakshaybansal198" target='_blank' rel="noreferrer"> <SiGeeksforgeeks className='text-[#329d86] p-2' size={45} />  </a>
        <a className='footer-link' href="https://leetcode.com/lakshay0786/" target='_blank' rel="noreferrer"> <SiLeetcode className='text-[#329d86] p-2' size={45} />  </a>
      </div>


      <div className=' mt-9 px-16 py-3 flex justify-center w-full bg-black text-gray-200'>

        <p className='text-sm  md:text-[16px]'>Copyright &copy; 2024 by Lakshay Bansal  </p>

      </div>

    </div>
  )
}

export default Footer