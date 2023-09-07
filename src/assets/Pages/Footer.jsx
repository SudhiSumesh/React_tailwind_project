import React from 'react'
import{
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
}from  'react-icons/fa'
function Footer() {
  return (
    <div
    className='text-gray-300 w-full py-16'
    >
     <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 '>
        <div>
      <h1 className="text-main-color font-bold w-full text-3xl ">KNOCK.</h1>
<p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nihil enim reiciendis deleniti repellat ipsam adipisci nesciunt nemo sunt rem corrupti nisi unde magni porro magnam illum! Suscipit, obcaecati optio.</p>
<div className='flex justify-between md:w-[75%] my-6 '>
    <FaDribbbleSquare size={30}/>
    <FaFacebookSquare size={30}/>
    <FaGithubSquare size={30}/>
    <FaInstagram size={30}/>
    <FaTwitterSquare size={30}/>
</div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
<div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>

            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Instinghts</li>
          </ul> 
          </div> 
      
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Instinghts</li>
          </ul>  
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Instinghts</li>
          </ul>  
        </div>
        </div> 
    </div>
    </div>
  )
}

export default Footer
