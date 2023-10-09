import React, {useState} from 'react'
import Vipaswi from 'public/assets/Vipaswi.jpg'
import Image from 'next/image'
import Stars from './stars'

const proficiency = [
  {
    Language: "Python",
    Proficiency: 2,
  },
  {
    Language: "Javascript",
    Proficiency: 4,
  },
  {
    Language: "HTML",
    Proficiency: 4.5,
  },
  {
    Language: "CSS",
    Proficiency: 4,
  },
  {
    Language: "Golang",
    Proficiency: 2,
  },
  {
    Language: "C++",
    Proficiency: 2,
  },
  {
    Language: "Arduino",
    Proficiency: 3,
  }
]

const Introduction = () => {
  return (
    <div className='flex mb-2 border border-gray-300 justify-evenly items-center bg-gradient-to-r from-slate-100 to-white border-s drop-shadow-md rounded-md'>
      <div className="flex-column">
        <h2 className='text-6xl bold bg-gradient-to-r from-blue-500 to-pink-800 bg-clip-text text-transparent bold font-serif'>Welcome!</h2>
        <p className='p-2 mt-5'>My name is Vipaswi Thapa. I am a Computer Engineer at the <span className='bg-gradient-to-r from-orange-800 to-yellow-700 bg-clip-text text-transparent'>Rochester Institute of Technology!</span></p>
        <div className='p-2'>
          {proficiency.map(object => (
            <Stars value={object.Proficiency}/>
            ))}
        </div>
      </div>
      <div className='m-10 p-10'>
        <Image src={Vipaswi} width={350} height={350} alt="Vipaswi" className='rounded-xl'/>
      </div>
    </div>
  )
}

export default Introduction