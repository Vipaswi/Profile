import React, {useState} from 'react'
import Vipaswi from 'public/assets/Vipaswi.jpg'
import Image from 'next/image'
import Stars from './Stars'
import Proficiency from '@/public/Files/Proficiency'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className='flex flex-col md:flex-row mb-2 border border-gray-300 md:justify-evenly justify-center items-center bg-gradient-to-r from-slate-100 to-white border-s drop-shadow-md rounded-md'>
      <div className='s:m-5 md:m-10 p-10'>
        <Image src={Vipaswi} width={350} height={350} alt="Vipaswi" className='rounded-xl'/>
      </div>
      <div className="flex-column pb-5 pr-5 pl-5 mb-10 items-center">
        <h2 className='text-6xl bold bg-gradient-to-r from-blue-500 to-pink-800 bg-clip-text text-transparent bold font-serif typewriter text-center md:text-start'>Welcome!</h2>
        <p className='p-2 mt-5 text-center md:text-start'>My name is Vipaswi Thapa. I am a Computer Engineer at the <span className='bg-gradient-to-r from-orange-800 to-yellow-700 bg-clip-text text-transparent '>Rochester Institute of Technology!</span></p>
        <div className='p-2'>
          <div className='grid w-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center'>
            {Proficiency.map(object => (
              <div className='flex m-1 justify-center'>
                <p className='pr-3'>{object.Language}</p>
                <Stars value={object.Proficiency}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
              </div>
              ))}
          </div>
        </div>
        <div className='flex justify-center md:justify-start pt-5'>
          <Link href='' className='hover:transition duration-[400ms] text-black hover:text-white bg-white border border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"'>
          <button type='button'>About Me!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Introduction