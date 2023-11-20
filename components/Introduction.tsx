import React, {useState} from 'react'
import Vipaswi from 'public/assets/Vipaswi.jpg'
import Image, { StaticImageData } from 'next/image'
import background from 'public/assets/background.jpg'
import Stars from './sub_components/Stars'
import Proficiency from '@/public/Files/Proficiency'
import Link from 'next/link'
import Click from './sub_components/Click'

interface ProficiencyObject {
  Language: StaticImageData;
  Proficiency: number;
}

const Introduction = () => {
  return (
    <div className="z-10 min-h-screen relative flex flex-col xl:flex-row md:justify-evenly justify-center items-center w-full rounded-md bg-[url('https://media.istockphoto.com/id/511661914/photo/white-marble-patterned-texture-background.jpg?s=612x612&w=0&k=20&c=o9RRB_jhshUtxn-LIO2TNQz4QycdeOh-qe1qMK4CZW4=')]">
      <div className="absolute opacity-80 inset-0 z-0">
        <Image src='https://www.toppal.com/media/images/products/cache/e201_l-2000x2000.jpg' fill style={{objectFit:"cover"}} alt="background"/> 
      </div>
      <div className='z-10 s:m-5 xl:m-10 p-10'>
        <Image src={Vipaswi} width={850} height={850} alt="Vipaswi" className='rounded-xl priority'/>
      </div>
      <div className="z-10 pb-5 pr-5 pl-5 mb-10 items-center">
        <h2 className='duration-500 text-6xl lg:text-8xl bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-800 bg-clip-text text-transparent bold font-serif text-center xl:text-start items-center lg:mb-10' >Welcome!</h2>
        <p className='p-2 lg:mt-5 lg:text-xl md:text-md text-center md:text-start'>
          My name is Vipaswi Thapa. I am a Computer Engineer at the {' '}
          <span className='bg-gradient-to-r from-orange-800 to-yellow-700 bg-clip-text text-transparent '>Rochester Institute of Technology!</span>
        </p>
        <p className="p-2 lg:mt-4 lg:text-xl md:text-md text-center md:text-start">I was born and raised in {' '}
          <span className='bg-gradient-to-t from-red-800 to-blue-800 text-transparent bg-clip-text'> Nepal. {' '} </span>
          Here are a few languages I have learnt:
        </p>
        <div className='z-10 p-2'>
          <div className='z-10 grid w-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center'>
            {Proficiency.map((object: ProficiencyObject) => (
              <div className='z-10 flex justify-center md:justify-evenly items-center m-2'>
                <Image className="mr-3 w-auto h-auto" src={object.Language} width={30} height={30} alt=""/>
                <Stars value={object.Proficiency}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
              </div>
              ))}
          </div>
        </div>
        <div className="xl:justify-start">
          <Click content="About Me" link="#About_Me"/>
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <div className='triangular-self'></div>
      </div>
    </div>
  )
}

export default Introduction