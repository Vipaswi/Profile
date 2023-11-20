'use client'
import Link from 'next/link'

interface Props {
  title: string,
  description: string,
  tags: Array<string>,
  link: string,
  type: string, 
  dates?: string,
}

export const Project = (props: Props) => {
  return (
    <Link href={props.link}> {/*/project/${props.title}/  for later*/}
      <div className="flex flex-col p-2 w-full outline-none drop-shadow-sm border border-black rounded-md bg-white hover:bg-gray-200">
        <div className="flex justify-between">
          <h5 className='m-3 font-bold project-title text-xl'>{props.title}</h5>
          <p className="text-sm">{props.dates}</p>
        </div>
        <h6 className="text-gray-500 ml-4 text-md">{props.type}</h6>
        <p className='text-md m-3'>{props.description}</p>
        <div className="flex ml-3">
          {props.tags.map(element=>{
            return(
              <div className="rounded-md bg-gray-300 text-black text-sm w-fit mr-3" key={props.tags.indexOf(element)}>#{element}</div>
            )
          })}
        </div>
      </div>
    </Link>

  )
}