'use client'
import Link from 'next/link'

interface Props {
  title: string,
  description: string,
  tags: string,
}

export const Project = (props: Props) => {
  return (
    <Link href={`/project/${props.title}/`}>
      <div className="flex flex-column w-full outline-none drop-shadow-sm border-black rounded-sm background-white">
          <h5 className='m-3 font-md md:font-xl text-blue-800 font-bold '>{props.title}</h5>
      </div>
    </Link>

  )
}