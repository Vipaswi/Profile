'use client'
import Link from 'next/link'

interface Props {
  title: string,
  description: string,
  tags: string,
}

export const Project = (props: Props) => {
  return (
    <Link href={``}> {/*/project/${props.title}/  for later*/}
      <div className="flex flex-col w-full outline-none drop-shadow-sm border border-black rounded-md bg-white ">
        <div className="">
            <h5 className='m-3 font-md md:font-xl font-bold project-title'>{props.title}</h5>
            <h6 className="text-gray-500">Personal Project</h6>
        </div>

        <div>
          <p className='font-md md:font-xl m-3'>{props.description}</p>
        </div>
      </div>
    </Link>

  )
}