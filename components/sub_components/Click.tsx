'use client'
import Link from "next/link"

interface props{
  content: string, 
  link?: string
}

const Click = (props: props) => {
  return(
    <div className='z-10 flex justify-center pt-5 mb-20'>
          <Link href={`${props.link}`} className='hover:transition duration-[400ms] text-black hover:text-white bg-white border border-black focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-5 py-2.5 mr-2"'>
          <button type='button'>{props.content}</button>
          </Link>
      </div>
  )
}

export default Click