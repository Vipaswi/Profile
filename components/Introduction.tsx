import React, {useState} from 'react'
import Vipaswi from 'public/assets/Vipaswi.jpg'
import Image from 'next/image'
import Stars from './Stars'
import Proficiency from '@/public/Files/Proficiency'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className='flex-col md:flex-row mb-2 border border-gray-300 md:justify-evenly items-center bg-gradient-to-r from-slate-100 to-white border-s drop-shadow-md rounded-md'>
      <div className="flex-column mt-5">
        <h2 className='text-6xl bold bg-gradient-to-r from-blue-500 to-pink-800 bg-clip-text text-transparent bold font-serif typewriter'>Welcome!</h2>
        <p className='p-2 mt-5'>My name is Vipaswi Thapa. I am a Computer Engineer at the <span className='bg-gradient-to-r from-orange-800 to-yellow-700 bg-clip-text text-transparent'>Rochester Institute of Technology!</span></p>
        <div className='p-2'>
          <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {Proficiency.map(object => (
              <div className='flex m-1'>
                <p className='pr-3'>{object.Language}</p>
                <Stars value={object.Proficiency}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
              </div>
              ))}
          </div>
        </div>
        <div className='pt-5'>
          <Link href='' className='hover:transition duration-[400ms] text-black hover:text-white bg-white border border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"'>
          <button type='button'>About Me!</button>
          </Link>
        </div>
      </div>
      <div className='m-10 p-10'>
        <Image src={Vipaswi} width={350} height={350} alt="Vipaswi" className='rounded-xl'/>
      </div>
    </div>
  )
}

export default Introduction