import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>

      <div className='mt-16 w-full flex flex-col gap-3 text-gray-200 items-center'>

        <p className='text-4xl tracking-wider font-semibold'>FIND ME ON</p>
        <p className='text-sm font-medium tracking-tight'>Feel free to <span className='text-[#72c1b0]'>connect</span> with me</p>

      </div>

      <div className='w-full mt-10 flex justify-center gap-14'>
        <a className='footer-link border ' href=""> <AiFillGithub className='text-[#329d86] p-2' size={45} />     </a>
        <a className='footer-link' href=""> <AiOutlineTwitter className='text-[#329d86] p-2' size={45} /> </a>
        <a className='footer-link' href=""> <FaLinkedinIn className='text-[#329d86] p-2' size={45} />     </a>
        <a className='footer-link' href=""> <AiFillInstagram className='text-[#329d86] p-2' size={45} />  </a>
      </div>


      <div className=' mt-9 px-16 py-3 flex justify-center w-full bg-black text-gray-200'>

        <p>Copyright &copy; 2024 by Lakshay Bansal  </p>

      </div>

    </div>
  )
}

export default Footer