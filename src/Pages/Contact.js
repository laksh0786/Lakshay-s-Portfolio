import React from 'react'

function Contact() {
  return (
    <div className='mt-24 w-full h-screen bg-[#0a192f] flex justify-center p-4 text-gray-300'>

      <form action="https://getform.io/f/59ad4d01-f24b-4114-af65-d4bdb75a3d0f" method="POST" className='flex flex-col max-w-[600px] w-full'>

        <div className='pb-6'>
          
          <p className='text-4xl font-bold border-b-4 border-pink-600'>Contact</p>

          <p className='py-4'>Submit the form below or shoot me an email - lakshay.bansal198@gmail.com</p>

        </div>

        <input className='contact-ip' type="text" placeholder='Name' name="name" />
        
        <input className='contact-ip' type="email" placeholder='Email' name="email" />

        <textarea className='contact-ip' placeholder='Message' cols='30' rows='10'></textarea>

        <button className='text-white border-2  font-medium rounded-md  hover:bg-pink-600 hover:rounded-md hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-500'>Let's Collaborate</button>

      </form>

    </div>
  )
}

export default Contact