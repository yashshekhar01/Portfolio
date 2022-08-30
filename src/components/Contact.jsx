import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c3fd27df-500a-47a0-a4e9-5cf002881a25" className='flex flex-col max-w-[600px] w-full py-10'>
            <div className='pb-7'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact Me</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <a href='mailto:yashshekhar2934@gmail.com' className='text-blue-600'>yashshekhar2934@gmail</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact